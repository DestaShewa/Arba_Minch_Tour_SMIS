import type { School, AcademicYear, ClassSection, Subject } from '../types/academic';

export const SEED_SCHOOL: School = {
  id: 'sch-arbaminch-001',
  name: 'Arba Minch Academy',
  motto: 'Excellence in Character and Knowledge',
  address: 'Sikela Sub-city, Near Grand Nech Sar Hotel',
  city: 'Arba Minch',
  region: 'Gamo Zone, South Ethiopia Region',
  phone: '+251 46 881 2345',
  email: 'info@arbaminchacademy.edu.et',
  directorName: 'Dr. Girma Tadesse',
};

export const SEED_ACADEMIC_YEARS: AcademicYear[] = [
  {
    id: 'ay-2016',
    name: '2016 E.C. (2023/2024)',
    startDate: '2023-09-11',
    endDate: '2024-07-05',
    isCurrent: false,
  },
  {
    id: 'ay-2017',
    name: '2017 E.C. (2024/2025)',
    startDate: '2024-09-09',
    endDate: '2025-07-04',
    isCurrent: true,
  },
];

export const SEED_CLASS_SECTIONS: ClassSection[] = [
  {
    id: 'cs-kg1-a',
    academicYearId: 'ay-2017',
    gradeLevel: 'KG-1',
    section: 'A',
    displayName: 'KG-1 - Section A',
    homeroomTeacherId: 'tch-001',
    roomNumber: 'B-01',
    maxCapacity: 25,
  },
  {
    id: 'cs-gr1-a',
    academicYearId: 'ay-2017',
    gradeLevel: 'Grade 1',
    section: 'A',
    displayName: 'Grade 1 - Section A',
    homeroomTeacherId: 'tch-002',
    roomNumber: 'A-101',
    maxCapacity: 35,
  },
  {
    id: 'cs-gr4-a',
    academicYearId: 'ay-2017',
    gradeLevel: 'Grade 4',
    section: 'A',
    displayName: 'Grade 4 - Section A',
    homeroomTeacherId: 'tch-003',
    roomNumber: 'A-201',
    maxCapacity: 35,
  },
  {
    id: 'cs-gr7-a',
    academicYearId: 'ay-2017',
    gradeLevel: 'Grade 7',
    section: 'A',
    displayName: 'Grade 7 - Section A',
    homeroomTeacherId: 'tch-004',
    roomNumber: 'C-301',
    maxCapacity: 40,
  },
  {
    id: 'cs-gr8-a',
    academicYearId: 'ay-2017',
    gradeLevel: 'Grade 8',
    section: 'A',
    displayName: 'Grade 8 - Section A',
    homeroomTeacherId: 'tch-005',
    roomNumber: 'C-302',
    maxCapacity: 40,
  },
];

export const SEED_SUBJECTS: Subject[] = [
  { id: 'sb-math-7', name: 'Mathematics', code: 'MATH-7', gradeLevel: 'Grade 7', totalPeriodsPerWeek: 5 },
  { id: 'sb-eng-7', name: 'English Language', code: 'ENG-7', gradeLevel: 'Grade 7', totalPeriodsPerWeek: 5 },
  { id: 'sb-sci-7', name: 'General Science', code: 'SCI-7', gradeLevel: 'Grade 7', totalPeriodsPerWeek: 4 },
  { id: 'sb-soc-7', name: 'Social Studies', code: 'SOC-7', gradeLevel: 'Grade 7', totalPeriodsPerWeek: 3 },
  { id: 'sb-civ-7', name: 'Civics & Ethical Education', code: 'CIV-7', gradeLevel: 'Grade 7', totalPeriodsPerWeek: 2 },
  { id: 'sb-math-8', name: 'Mathematics', code: 'MATH-8', gradeLevel: 'Grade 8', totalPeriodsPerWeek: 5 },
  { id: 'sb-eng-8', name: 'English Language', code: 'ENG-8', gradeLevel: 'Grade 8', totalPeriodsPerWeek: 5 },
];