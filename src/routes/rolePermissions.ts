// src/routes/rolePermissions.ts
import type { UserRole } from '../types/auth';

export const ROLE_DEFAULT_ROUTES: Record<UserRole, string> = {
  ADMIN: '/dashboard',
  SECRETARY: '/students',
  TEACHER: '/attendance',
  CASHIER: '/fees',
};

export const ROUTE_ACCESS: Record<string, UserRole[]> = {
  '/dashboard': ['ADMIN', 'SECRETARY', 'TEACHER', 'CASHIER'],
  '/students': ['ADMIN', 'SECRETARY'],
  '/classes': ['ADMIN', 'SECRETARY'],
  '/attendance': ['ADMIN', 'SECRETARY', 'TEACHER'],
  '/fees': ['ADMIN', 'CASHIER'],
  '/exams': ['ADMIN', 'TEACHER', 'SECRETARY'],
  '/teachers': ['ADMIN'],
  '/sms': ['ADMIN', 'SECRETARY'],
  '/sync': ['ADMIN', 'SECRETARY', 'CASHIER', 'TEACHER'],
  '/reports': ['ADMIN', 'SECRETARY', 'CASHIER'],
  '/settings': ['ADMIN'],
};