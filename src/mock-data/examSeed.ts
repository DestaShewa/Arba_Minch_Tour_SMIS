import type { Exam, MarkRecord } from '../types/exam';

export const SEED_EXAMS: Exam[] = [
  {
    id: 'ex-001',
    title: 'Semester 1 - Mid-Term Exam',
    examType: 'Mid Exam',
    academicYearId: 'ay-2017',
    semester: 'Semester 1',
    classSectionId: 'cs-gr7-a',
    gradeLevel: 'Grade 7',
    subjectId: 'sb-math-7',
    subjectName: 'Mathematics',
    totalMarks: 30,
    passMark: 15,
    date: '2024-10-22',
  },
  {
    id: 'ex-002',
    title: 'Semester 1 - Mid-Term Exam',
    examType: 'Mid Exam',
    academicYearId: 'ay-2017',
    semester: 'Semester 1',
    classSectionId: 'cs-gr7-a',
    gradeLevel: 'Grade 7',
    subjectId: 'sb-eng-7',
    subjectName: 'English Language',
    totalMarks: 30,
    passMark: 15,
    date: '2024-10-23',
  },
];

export const SEED_MARKS: MarkRecord[] = [
  // Math Mid-Exam Marks
  { id: 'mk-01', examId: 'ex-001', studentId: 'std-2017-037', studentName: 'Natnael Girma Hailu', score: 28, isAbsent: false, gradedByUserId: 'tch-004' },
  { id: 'mk-02', examId: 'ex-001', studentId: 'std-2017-038', studentName: 'Bethlehem Bekele Mengistu', score: 26, isAbsent: false, gradedByUserId: 'tch-004' },
  { id: 'mk-03', examId: 'ex-001', studentId: 'std-2017-039', studentName: 'Eyob Wolde Shiferaw', score: 19, isAbsent: false, gradedByUserId: 'tch-004' },
  { id: 'mk-04', examId: 'ex-001', studentId: 'std-2017-040', studentName: 'Tsion Tesfaye Abebe', score: 30, isAbsent: false, gradedByUserId: 'tch-004' },
  { id: 'mk-05', examId: 'ex-001', studentId: 'std-2017-041', studentName: 'Yosef Mekonnen Belay', score: 14, isAbsent: false, gradedByUserId: 'tch-004' },
  // English Mid-Exam Marks
  { id: 'mk-06', examId: 'ex-002', studentId: 'std-2017-037', studentName: 'Natnael Girma Hailu', score: 27, isAbsent: false, gradedByUserId: 'tch-005' },
  { id: 'mk-07', examId: 'ex-002', studentId: 'std-2017-038', studentName: 'Bethlehem Bekele Mengistu', score: 29, isAbsent: false, gradedByUserId: 'tch-005' },
  { id: 'mk-08', examId: 'ex-002', studentId: 'std-2017-039', studentName: 'Eyob Wolde Shiferaw', score: 21, isAbsent: false, gradedByUserId: 'tch-005' },
  { id: 'mk-09', examId: 'ex-002', studentId: 'std-2017-040', studentName: 'Tsion Tesfaye Abebe', score: 28, isAbsent: false, gradedByUserId: 'tch-005' },
  { id: 'mk-10', examId: 'ex-002', studentId: 'std-2017-041', studentName: 'Yosef Mekonnen Belay', score: 16, isAbsent: false, gradedByUserId: 'tch-005' },
];