import { storageAdapter } from './localStorageAdapter';
import { DB_KEYS } from './databaseKeys';

import { SEED_SCHOOL, SEED_ACADEMIC_YEARS, SEED_CLASS_SECTIONS, SEED_SUBJECTS } from '../../mock-data/academicSeed';
import { SEED_TEACHERS } from '../../mock-data/teacherSeed';
import { SEED_STUDENTS } from '../../mock-data/studentSeed';
import { SEED_FEE_STRUCTURES, SEED_INVOICES, SEED_PAYMENTS } from '../../mock-data/feeSeed';
import { SEED_ATTENDANCE } from '../../mock-data/attendanceSeed';
import { SEED_EXAMS, SEED_MARKS } from '../../mock-data/examSeed';
import { SEED_SMS_QUEUE } from '../../mock-data/smsSeed';
import { SEED_SYNC_QUEUE } from '../../mock-data/syncSeed';

/**
 * Initializes the local database on first run.
 * Does not overwrite existing user edits when the page refreshes.
 */
export function initializeLocalDatabase(forceReset: boolean = false): void {
  const isInitialized = storageAdapter.get<boolean>(DB_KEYS.INITIALIZED, false);

  if (isInitialized && !forceReset) {
    return;
  }

  storageAdapter.set(DB_KEYS.SCHOOL, SEED_SCHOOL);
  storageAdapter.set(DB_KEYS.ACADEMIC_YEARS, SEED_ACADEMIC_YEARS);
  storageAdapter.set(DB_KEYS.CLASS_SECTIONS, SEED_CLASS_SECTIONS);
  storageAdapter.set(DB_KEYS.SUBJECTS, SEED_SUBJECTS);
  storageAdapter.set(DB_KEYS.TEACHERS, SEED_TEACHERS);
  storageAdapter.set(DB_KEYS.STUDENTS, SEED_STUDENTS);
  storageAdapter.set(DB_KEYS.FEE_STRUCTURES, SEED_FEE_STRUCTURES);
  storageAdapter.set(DB_KEYS.FEE_INVOICES, SEED_INVOICES);
  storageAdapter.set(DB_KEYS.FEE_PAYMENTS, SEED_PAYMENTS);
  storageAdapter.set(DB_KEYS.ATTENDANCE, SEED_ATTENDANCE);
  storageAdapter.set(DB_KEYS.EXAMS, SEED_EXAMS);
  storageAdapter.set(DB_KEYS.MARKS, SEED_MARKS);
  storageAdapter.set(DB_KEYS.SMS_QUEUE, SEED_SMS_QUEUE);
  storageAdapter.set(DB_KEYS.SYNC_QUEUE, SEED_SYNC_QUEUE);
  storageAdapter.set(DB_KEYS.INITIALIZED, true);

  console.log('✅ Arba Minch Academy local mock database initialized successfully.');
}