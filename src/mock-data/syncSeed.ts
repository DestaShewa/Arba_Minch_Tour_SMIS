import type { SyncQueueItem } from '../types/sync';

export const SEED_SYNC_QUEUE: SyncQueueItem[] = [
  {
    id: 'sync-001',
    entityType: 'ATTENDANCE',
    operation: 'CREATE',
    entityId: 'att-120',
    summary: 'Attendance register submitted for Grade 7A (12 students)',
    payload: { classSectionId: 'cs-gr7-a', date: '2024-10-18', count: 12 },
    status: 'SYNCED',
    createdAt: '2024-10-18T08:15:00Z',
    syncedAt: '2024-10-18T08:16:30Z',
  },
  {
    id: 'sync-002',
    entityType: 'PAYMENT',
    operation: 'CREATE',
    entityId: 'pmt-202',
    summary: 'Cash collection recorded: 900 ETB for Bethlehem Bekele',
    payload: { receiptNumber: 'RCP-2017-0102', amountETB: 900, method: 'Cash' },
    status: 'PENDING',
    createdAt: '2024-10-24T10:05:00Z',
  },
  {
    id: 'sync-003',
    entityType: 'STUDENT',
    operation: 'UPDATE',
    entityId: 'std-2017-037',
    summary: 'Updated Guardian Contact & Address for Natnael Girma',
    payload: {
      studentId: 'std-2017-037',
      address: 'Sikela Sub-city, Near Bekele Mola Hotel',
      guardianPhone: '+251 91 199 8877',
    },
    status: 'CONFLICT',
    createdAt: '2024-10-24T10:45:00Z',
    lastAttemptAt: '2024-10-24T10:46:10Z',
    errorMessage: 'Concurrent update detected: Head Registrar edited this record at 10:43 AM.',
    conflictDetails: {
      localVersion: {
        address: 'Sikela Sub-city, Near Bekele Mola Hotel',
        guardianPhone: '+251 91 199 8877',
      },
      serverVersion: {
        address: 'Sikela Sub-city, Kebele 01, House #402',
        guardianPhone: '+251 91 122 3344',
      },
      fieldConflicts: ['address', 'guardianPhone'],
    },
  },
];