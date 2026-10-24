import React from 'react';
import { Construction } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  phaseNumber: number;
  description: string;
}

export const ModulePlaceholder: React.FC<PlaceholderProps> = ({
  title,
  phaseNumber,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm">
      <div className="w-12 h-12 bg-blue-50 text-brand-600 rounded-xl flex items-center justify-center mx-auto mb-3">
        <Construction className="w-6 h-6" />
      </div>
      <span className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200 uppercase tracking-wider">
        Phase {phaseNumber} Scheduled
      </span>
      <h3 className="text-xl font-bold text-slate-900 mt-3">{title}</h3>
      <p className="text-sm text-slate-500 max-w-lg mx-auto mt-2 mb-6">
        {description}
      </p>
      <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
        <span>Service layer contract defined in</span>
        <code className="text-slate-700 font-mono">src/services/</code>
      </div>
    </div>
  );
};

export const DashboardPage = () => (
  <ModulePlaceholder
    title="Executive Dashboard"
    phaseNumber={3}
    description="Aggregated KPIs, today's attendance rate, monthly fees collected (ETB), outstanding balances, and Recharts trends."
  />
);

export const StudentsPage = () => (
  <ModulePlaceholder
    title="Students Module"
    phaseNumber={4}
    description="Student registry, class & section filters, multi-tab student profile, CSV export, and offline student registration."
  />
);

export const ClassesPage = () => (
  <ModulePlaceholder
    title="Classes & Sections"
    phaseNumber={5}
    description="Academic year setup, KG to Grade 12 curriculum management, class-teacher assignments, and section capacity monitoring."
  />
);

export const AttendancePage = () => (
  <ModulePlaceholder
    title="Daily Attendance Register"
    phaseNumber={6}
    description="Class/section attendance taking, 'Mark All Present' action, offline queueing, and automatic absentee SMS queue generation."
  />
);

export const FeesPage = () => (
  <ModulePlaceholder
    title="Fees & Cashier Terminal"
    phaseNumber={7}
    description="Fee structure configuration, invoice generation, append-only payment recording (ETB, Telebirr, CBE), and printable receipts."
  />
);

export const ExamsPage = () => (
  <ModulePlaceholder
    title="Exams & Mark Sheets"
    phaseNumber={8}
    description="Score entry by subject, automatic average and rank computation, validation checks, and print-ready bilingual report cards."
  />
);

export const TeachersPage = () => (
  <ModulePlaceholder
    title="Teachers & Staff Directory"
    phaseNumber={9}
    description="Staff directory, teacher subject specializations, and class assignment matrices."
  />
);

export const SmsPage = () => (
  <ModulePlaceholder
    title="SMS Communication Center"
    phaseNumber={10}
    description="Queue monitoring for absentee and payment notices, retry handlers, and ETB cost calculation engine."
  />
);

export const SyncPage = () => (
  <ModulePlaceholder
    title="Offline Sync Center"
    phaseNumber={11}
    description="Sync queue inspection, pending offline writes, sync simulation, and interactive conflict resolution."
  />
);

export const ReportsPage = () => (
  <ModulePlaceholder
    title="Reports & Analytics Hub"
    phaseNumber={12}
    description="Attendance, fee collections, outstanding balance summaries, and exportable CSV documents."
  />
);

export const SettingsPage = () => (
  <ModulePlaceholder
    title="School Profile & System Settings"
    phaseNumber={12}
    description="Arba Minch Academy school metadata, academic calendar, currency lock (ETB), Amharic/English toggles, and JSON database export."
  />
);