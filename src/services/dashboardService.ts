import { storageAdapter } from './storage/localStorageAdapter';
import { DB_KEYS } from './storage/databaseKeys';
import type { Student } from '../types/student';
import type { Teacher } from '../types/teacher';
import type { AttendanceRecord } from '../types/attendance';
import type { FeePayment, FeeInvoice } from '../types/fee';

export interface AttendanceTrendPoint {
  date: string;
  displayDate: string;
  attendanceRate: number;
  presentCount: number;
  absentCount: number;
}

export interface StudentOutstandingItem {
  id: string;
  fullName: string;
  admissionNumber: string;
  gradeLevel: string;
  section: string;
  balanceETB: number;
  guardianPhone: string;
}

export interface DashboardMetrics {
  totalStudents: number;
  totalTeachers: number;
  todayAttendanceRate: number;
  totalFeesCollectedThisMonthETB: number;
  totalOutstandingFeesETB: number;
  recentPayments: FeePayment[];
  topOutstandingStudents: StudentOutstandingItem[];
  attendanceTrends: AttendanceTrendPoint[];
}

class DashboardService {
  /**
   * Aggregates live school statistics with simulated 250ms API response delay
   */
  async getDashboardMetrics(): Promise<DashboardMetrics> {
    await new Promise((resolve) => setTimeout(resolve, 250));

    const students = storageAdapter.get<Student[]>(DB_KEYS.STUDENTS, []);
    const teachers = storageAdapter.get<Teacher[]>(DB_KEYS.TEACHERS, []);
    const attendance = storageAdapter.get<AttendanceRecord[]>(DB_KEYS.ATTENDANCE, []);
    const invoices = storageAdapter.get<FeeInvoice[]>(DB_KEYS.FEE_INVOICES, []);
    const payments = storageAdapter.get<FeePayment[]>(DB_KEYS.FEE_PAYMENTS, []);

    // 1. Total active students & staff
    const activeStudents = students.filter((s) => s.status === 'Active');
    const totalStudents = activeStudents.length;
    const totalTeachers = teachers.filter((t) => t.status === 'Active').length;

    // 2. Attendance rate today (or most recent attendance date in database)
    const dates = Array.from(new Set(attendance.map((a) => a.date))).sort();
    const latestDate = dates[dates.length - 1];
    const latestRecords = attendance.filter((a) => a.date === latestDate);

    let todayAttendanceRate = 0;
    if (latestRecords.length > 0) {
      const presentCount = latestRecords.filter(
        (a) => a.status === 'Present' || a.status === 'Late'
      ).length;
      todayAttendanceRate = (presentCount / latestRecords.length) * 100;
    }

    // 3. Financial calculations (ETB)
    const totalFeesCollectedThisMonthETB = payments.reduce(
      (sum, p) => sum + p.amountPaidETB,
      0
    );

    const totalOutstandingFeesETB = invoices.reduce(
      (sum, inv) => sum + inv.balanceETB,
      0
    );

    // 4. Recent payments (top 5 sorted by date descending)
    const recentPayments = [...payments]
      .sort((a, b) => new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime())
      .slice(0, 5);

    // 5. Students with highest outstanding balances
    const topOutstandingStudents = [...students]
      .filter((s) => s.outstandingBalanceETB > 0)
      .sort((a, b) => b.outstandingBalanceETB - a.outstandingBalanceETB)
      .slice(0, 5)
      .map((s) => ({
        id: s.id,
        fullName: s.fullName,
        admissionNumber: s.admissionNumber,
        gradeLevel: s.gradeLevel,
        section: s.section,
        balanceETB: s.outstandingBalanceETB,
        guardianPhone: s.guardianPhone,
      }));

    // 6. 7-day attendance trend
    const recentDates = dates.slice(-7);
    const attendanceTrends: AttendanceTrendPoint[] = recentDates.map((d) => {
      const dayRecords = attendance.filter((a) => a.date === d);
      const present = dayRecords.filter(
        (a) => a.status === 'Present' || a.status === 'Late'
      ).length;
      const absent = dayRecords.filter((a) => a.status === 'Absent').length;
      const total = dayRecords.length || 1;
      const rate = Math.round((present / total) * 100);

      // format e.g. "10/18"
      const dateParts = d.split('-');
      const displayDate = `${dateParts[1]}/${dateParts[2]}`;

      return {
        date: d,
        displayDate,
        attendanceRate: rate,
        presentCount: present,
        absentCount: absent,
      };
    });

    return {
      totalStudents,
      totalTeachers,
      todayAttendanceRate,
      totalFeesCollectedThisMonthETB,
      totalOutstandingFeesETB,
      recentPayments,
      topOutstandingStudents,
      attendanceTrends,
    };
  }
}

export const dashboardService = new DashboardService();