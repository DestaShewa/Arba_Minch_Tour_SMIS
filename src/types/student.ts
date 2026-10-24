import type { GradeLevelType } from './academic';

export type Gender = 'Male' | 'Female';
export type StudentStatus = 'Active' | 'Transferred' | 'Graduated' | 'Withdrawn';

export interface Student {
  id: string;
  admissionNumber: string; // e.g. "AMA/2017/041"
  fullName: string;
  gender: Gender;
  dateOfBirth: string;
  guardianName: string;
  guardianPhone: string;
  guardianRelation: 'Father' | 'Mother' | 'Guardian';
  address: string; // e.g. "Sikela Sub-city, Woreda 02"
  gradeLevel: GradeLevelType;
  section: string;
  classSectionId: string;
  academicYearId: string;
  registrationDate: string;
  status: StudentStatus;
  avatarUrl?: string;
  outstandingBalanceETB: number;
}