export interface School {
  id: string;
  name: string;
  motto: string;
  address: string;
  city: string;
  region: string;
  phone: string;
  email: string;
  logoUrl?: string;
  directorName: string;
}

export interface AcademicYear {
  id: string;
  name: string; // e.g. "2017 E.C. (2024/2025)"
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

export type GradeLevelType =
  | 'KG-1'
  | 'KG-2'
  | 'KG-3'
  | 'Grade 1'
  | 'Grade 2'
  | 'Grade 3'
  | 'Grade 4'
  | 'Grade 5'
  | 'Grade 6'
  | 'Grade 7'
  | 'Grade 8'
  | 'Grade 9'
  | 'Grade 10'
  | 'Grade 11'
  | 'Grade 12';

export interface ClassSection {
  id: string;
  academicYearId: string;
  gradeLevel: GradeLevelType;
  section: 'A' | 'B' | 'C' | 'D';
  displayName: string; // e.g. "Grade 7 - Section A"
  homeroomTeacherId?: string;
  roomNumber?: string;
  maxCapacity: number;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  gradeLevel: GradeLevelType;
  totalPeriodsPerWeek: number;
}