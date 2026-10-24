// src/components/layout/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import type { UserRole } from '../../types/auth';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  CalendarCheck,
  Receipt,
  FileSpreadsheet,
  MessageSquare,
  RefreshCw,
  BarChart3,
  Settings,
  BookOpen
} from 'lucide-react';

interface SidebarItem {
  label: string;
  labelAmh: string;
  path: string;
  icon: React.ReactNode;
  roles: UserRole[];
}

const NAV_ITEMS: SidebarItem[] = [
  {
    label: 'Dashboard',
    labelAmh: 'ዳሽቦርድ',
    path: '/dashboard',
    icon: <LayoutDashboard className="w-4 h-4" />,
    roles: ['ADMIN', 'SECRETARY', 'TEACHER', 'CASHIER'],
  },
  {
    label: 'Students',
    labelAmh: 'ተማሪዎች',
    path: '/students',
    icon: <Users className="w-4 h-4" />,
    roles: ['ADMIN', 'SECRETARY'],
  },
  {
    label: 'Classes & Sections',
    labelAmh: 'ክፍሎች',
    path: '/classes',
    icon: <BookOpen className="w-4 h-4" />,
    roles: ['ADMIN', 'SECRETARY'],
  },
  {
    label: 'Daily Attendance',
    labelAmh: 'የዕለት መገኘት',
    path: '/attendance',
    icon: <CalendarCheck className="w-4 h-4" />,
    roles: ['ADMIN', 'SECRETARY', 'TEACHER'],
  },
  {
    label: 'Fees & Payments',
    labelAmh: 'ክፍያዎች',
    path: '/fees',
    icon: <Receipt className="w-4 h-4" />,
    roles: ['ADMIN', 'CASHIER'],
  },
  {
    label: 'Exams & Marks',
    labelAmh: 'ፈተናዎች እና ውጤቶች',
    path: '/exams',
    icon: <FileSpreadsheet className="w-4 h-4" />,
    roles: ['ADMIN', 'TEACHER', 'SECRETARY'],
  },
  {
    label: 'Teachers',
    labelAmh: 'መምህራን',
    path: '/teachers',
    icon: <GraduationCap className="w-4 h-4" />,
    roles: ['ADMIN'],
  },
  {
    label: 'SMS Center',
    labelAmh: 'የአጭር መልእክት ማዕከል',
    path: '/sms',
    icon: <MessageSquare className="w-4 h-4" />,
    roles: ['ADMIN', 'SECRETARY'],
  },
  {
    label: 'Sync Center',
    labelAmh: 'የማመሳሰያ ማዕከል',
    path: '/sync',
    icon: <RefreshCw className="w-4 h-4" />,
    roles: ['ADMIN', 'SECRETARY', 'CASHIER', 'TEACHER'],
  },
  {
    label: 'Reports',
    labelAmh: 'ሪፖርቶች',
    path: '/reports',
    icon: <BarChart3 className="w-4 h-4" />,
    roles: ['ADMIN', 'SECRETARY', 'CASHIER'],
  },
  {
    label: 'School Settings',
    labelAmh: 'ቅንብሮች',
    path: '/settings',
    icon: <Settings className="w-4 h-4" />,
    roles: ['ADMIN'],
  },
];

export const Sidebar: React.FC = () => {
  const { user } = useAuthStore();
  const currentRole = user?.role || 'TEACHER';

  const accessibleNavItems = NAV_ITEMS.filter((item) =>
    item.roles.includes(currentRole)
  );

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col flex-shrink-0 min-h-screen">
      <div className="p-5 border-b border-slate-800 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-white shadow-md">
          AM
        </div>
        <div>
          <div className="font-bold text-white text-sm tracking-wide">AMA Academy</div>
          <div className="text-[11px] text-slate-400">Offline SMS v1.0</div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="px-3 py-2 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
          School Modules
        </div>
        {accessibleNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <span className="text-[10px] opacity-60 font-amharic hidden lg:inline">
              {item.labelAmh}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 bg-slate-950 text-xs text-slate-400">
        <div className="flex items-center justify-between">
          <span>Active Role:</span>
          <span className="font-semibold text-slate-200">{currentRole}</span>
        </div>
        <div className="mt-1 text-[11px] text-slate-400">Arba Minch Branch</div>
      </div>
    </aside>
  );
};