export type AttendanceStatus = 'Present' | 'Absent' | 'Late' | 'Excused';

export interface AttendanceRecord {
  id: string;
  studentId: string;
  classSectionId: string;
  date: string; // YYYY-MM-DD
  status: AttendanceStatus;
  remarks?: string;
  recordedByUserId: string;
  recordedAt: string;
}

export interface AttendanceSheetEntry {
  studentId: string;
  studentName: string;
  gender: string;
  status: AttendanceStatus;
  remarks?: string;
}