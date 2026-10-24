// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { LoginPage } from '../pages/auth/LoginPage';
import { UnauthorizedPage } from '../pages/auth/UnauthorizedPage';

// Import Real Phase 3 Dashboard
import { DashboardPage } from '../features/dashboard/DashboardPage';

// Placeholders for remaining phases
import {
  StudentsPage,
  ClassesPage,
  AttendancePage,
  FeesPage,
  ExamsPage,
  TeachersPage,
  SmsPage,
  SyncPage,
  ReportsPage,
  SettingsPage,
} from '../pages/Placeholders';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'SECRETARY']} />}>
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/sms" element={<SmsPage />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'SECRETARY', 'TEACHER']} />}>
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/exams" element={<ExamsPage />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'CASHIER']} />}>
            <Route path="/fees" element={<FeesPage />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'SECRETARY', 'CASHIER']} />}>
            <Route path="/reports" element={<ReportsPage />} />
          </Route>

          <Route path="/sync" element={<SyncPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};