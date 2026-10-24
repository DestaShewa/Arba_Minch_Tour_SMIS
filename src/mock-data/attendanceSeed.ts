import type { AttendanceRecord } from '../types/attendance';

export const SEED_ATTENDANCE: AttendanceRecord[] = [];

// Seed 10 school days of attendance for Grade 7A (students 37 to 48)
const schoolDays = [
  '2024-10-07', '2024-10-08', '2024-10-09', '2024-10-10', '2024-10-11',
  '2024-10-14', '2024-10-15', '2024-10-16', '2024-10-17', '2024-10-18',
];

const grade7Students = [
  'std-2017-037', 'std-2017-038', 'std-2017-039', 'std-2017-040',
  'std-2017-041', 'std-2017-042', 'std-2017-043', 'std-2017-044',
  'std-2017-045', 'std-2017-046', 'std-2017-047', 'std-2017-048',
];

let attCounter = 1;
schoolDays.forEach((date) => {
  grade7Students.forEach((stdId, idx) => {
    // 92% attendance simulation with sporadic absentees
    let status: 'Present' | 'Absent' | 'Late' | 'Excused' = 'Present';
    if ((attCounter + idx) % 17 === 0) status = 'Absent';
    else if ((attCounter + idx) % 23 === 0) status = 'Late';
    else if ((attCounter + idx) % 31 === 0) status = 'Excused';

    SEED_ATTENDANCE.push({
      id: `att-${attCounter++}`,
      studentId: stdId,
      classSectionId: 'cs-gr7-a',
      date,
      status,
      remarks: status === 'Excused' ? 'Medical excuse note provided' : undefined,
      recordedByUserId: 'tch-004', // Alemayehu Mengistu
      recordedAt: `${date}T08:15:00Z`,
    });
  });
});