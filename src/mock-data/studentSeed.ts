import type { Student } from '../types/student';

// Generates 60 realistic Ethiopian student profiles in Arba Minch
const firstNamesMale = [
  'Abel', 'Natnael', 'Eyob', 'Yosef', 'Kidus', 'Surafel', 'Dagmawi', 'Ephrem',
  'Yared', 'Samuel', 'Biruk', 'Elias', 'Kaleb', 'Nebiyu', 'Tamirat'
];
const firstNamesFemale = [
  'Bethlehem', 'Tsion', 'Selamawit', 'Hiwot', 'Lidia', 'Hanna', 'Eden', 'Kalkidan',
  'Helina', 'Rediet', 'Mahlet', 'Ruth', 'Blen', 'Feven', 'Samrawit'
];
const paternalNames = [
  'Alemayehu', 'Tadesse', 'Bekele', 'Girma', 'Wolde', 'Tesfaye', 'Mekonnen',
  'Kassahun', 'Kebede', 'Haile', 'Assefa', 'Desta', 'Getachew', 'Fikre', 'Zewde'
];
const grandNames = [
  'Worku', 'Demissie', 'Bogale', 'Shiferaw', 'Abebe', 'Belay', 'Mulugeta',
  'Hailu', 'Negash', 'Mengistu', 'Tefera', 'Bedane', 'Tolossa', 'Gebre', 'Ayele'
];

const subCities = [
  'Sikela Sub-city, Kebele 01',
  'Sikela Sub-city, Near Central Market',
  'Secha Sub-city, Kebele 02',
  'Secha Sub-city, Near Arba Minch University',
  'Bekele Mola Area, Sikela',
  'Limat Sub-city, Kebele 03',
];

const classesMap = [
  { grade: 'KG-1', section: 'A', classSectionId: 'cs-kg1-a', count: 12 },
  { grade: 'Grade 1', section: 'A', classSectionId: 'cs-gr1-a', count: 12 },
  { grade: 'Grade 4', section: 'A', classSectionId: 'cs-gr4-a', count: 12 },
  { grade: 'Grade 7', section: 'A', classSectionId: 'cs-gr7-a', count: 12 },
  { grade: 'Grade 8', section: 'A', classSectionId: 'cs-gr8-a', count: 12 },
] as const;

export const SEED_STUDENTS: Student[] = [];

let counter = 1;
classesMap.forEach((c) => {
  for (let i = 0; i < c.count; i++) {
    const isMale = (counter + i) % 2 === 0;
    const fName = isMale
      ? firstNamesMale[(counter + i) % firstNamesMale.length]
      : firstNamesFemale[(counter + i) % firstNamesFemale.length];
    const mName = paternalNames[(counter * 3 + i) % paternalNames.length];
    const gName = grandNames[(counter * 7 + i) % grandNames.length];
    const fullName = `${fName} ${mName} ${gName}`;

    const numStr = String(counter).padStart(3, '0');
    const admissionNumber = `AMA/2017/${numStr}`;

    // Overdue balance simulation for some students
    const balances = [0, 0, 1800, 0, 3600, 0, 900];
    const outstandingBalanceETB = balances[counter % balances.length];

    SEED_STUDENTS.push({
      id: `std-2017-${numStr}`,
      admissionNumber,
      fullName,
      gender: isMale ? 'Male' : 'Female',
      dateOfBirth: `201${Math.max(0, 7 - parseInt(c.grade.replace(/[^0-9]/g, '') || '0'))}-0${(i % 9) + 1}-1${(i % 8) + 1}`,
      guardianName: `${mName} ${gName}`,
      guardianPhone: `+251 9${(10000000 + counter * 82736) % 90000000}`,
      guardianRelation: isMale ? 'Father' : 'Mother',
      address: subCities[i % subCities.length],
      gradeLevel: c.grade,
      section: c.section,
      classSectionId: c.classSectionId,
      academicYearId: 'ay-2017',
      registrationDate: '2024-09-02',
      status: 'Active',
      outstandingBalanceETB,
    });

    counter++;
  }
});