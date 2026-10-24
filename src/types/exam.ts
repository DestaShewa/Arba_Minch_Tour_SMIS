import type { GradeLevelType } from './academic';

export type ExamType = 'Quiz' | 'Test' | 'Assignment' | 'Mid Exam' | 'Final Exam';

export interface Exam {
  id: string;
  title: string;
  examType: ExamType;
  academicYearId: string;
  semester: 'Semester 1' | 'Semester 2';
  classSectionId: string;
  gradeLevel: GradeLevelType;
  subjectId: string;
  subjectName: string;
  totalMarks: number;
  passMark: number;
  date: string;
}

export interface MarkRecord {
  id: string;
  examId: string;
  studentId: string;
  studentName: string;
  score: number;
  isAbsent: boolean;
  gradedByUserId: string;
}

export interface SubjectResult {
  subjectName: string;
  totalMarks: number;
  obtainedScore: number;
  grade: string; // A, B, C, D, F
}

export interface ReportCard {
  studentId: string;
  studentName: string;
  gradeLevel: string;
  section: string;
  academicYear: string;
  semester: string;
  results: SubjectResult[];
  grandTotal: number;
  outOf: number;
  average: number;
  rank: number;
  classSize: number;
  status: 'Pass' | 'Fail';
  conduct: 'Excellent' | 'Very Good' | 'Good' | 'Needs Improvement';
}