// src/types/navigation.ts
import type { UserRole } from './auth';

export interface NavItem {
  label: string;
  labelAmharic: string;
  path: string;
  iconName: string;
  allowedRoles: UserRole[];
  badgeKey?: 'pendingSync' | 'unpaidFees' | 'smsQueue';
}