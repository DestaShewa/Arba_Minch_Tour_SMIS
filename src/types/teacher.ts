import type { Gender } from './student';

export type TeacherStatus = 'Active' | 'On Leave' | 'Inactive';

export interface TeacherAssignment {
  classSectionId: string;
  subjectId: string;
}

export interface Teacher {
  id: string;
  employeeId: string; // e.g. "T-AMA-004"
  fullName: string;
  gender: Gender;
  phone: string;
  email: string;
  qualification: string; // e.g. "B.Sc. in Mathematics Education"
  specialization: string; // e.g. "Mathematics & Physics"
  status: TeacherStatus;
  joiningDate: string;
  assignedClasses: TeacherAssignment[];
}