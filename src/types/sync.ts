export type SyncOperation = 'CREATE' | 'UPDATE' | 'DELETE';
export type SyncStatus = 'PENDING' | 'SYNCED' | 'FAILED' | 'CONFLICT';
export type SyncEntityType = 'STUDENT' | 'ATTENDANCE' | 'PAYMENT' | 'MARK';

export interface SyncConflictPayload {
  localVersion: Record<string, unknown>;
  serverVersion: Record<string, unknown>;
  fieldConflicts: string[];
}

export interface SyncQueueItem {
  id: string;
  entityType: SyncEntityType;
  operation: SyncOperation;
  entityId: string;
  summary: string;
  payload: Record<string, unknown>;
  status: SyncStatus;
  createdAt: string;
  syncedAt?: string;
  lastAttemptAt?: string;
  errorMessage?: string;
  conflictDetails?: SyncConflictPayload;
}