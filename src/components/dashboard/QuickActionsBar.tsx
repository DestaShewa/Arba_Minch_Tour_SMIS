import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, CalendarCheck, Receipt, FileSpreadsheet } from 'lucide-react';

export const QuickActionsBar: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    {
      label: 'Add Student',
      description: 'Register new enrollment',
      icon: <UserPlus className="w-4 h-4 text-brand-600" />,
      onClick: () => navigate('/students'),
      color: 'hover:border-brand-500 hover:bg-brand-50/40',
    },
    {
      label: 'Mark Attendance',
      description: 'Daily class register',
      icon: <CalendarCheck className="w-4 h-4 text-emerald-600" />,
      onClick: () => navigate('/attendance'),
      color: 'hover:border-emerald-500 hover:bg-emerald-50/40',
    },
    {
      label: 'Record Payment',
      description: 'Issue fee receipt (ETB)',
      icon: <Receipt className="w-4 h-4 text-amber-600" />,
      onClick: () => navigate('/fees'),
      color: 'hover:border-amber-500 hover:bg-amber-50/40',
    },
    {
      label: 'Report Cards',
      description: 'Generate semester summary',
      icon: <FileSpreadsheet className="w-4 h-4 text-purple-600" />,
      onClick: () => navigate('/exams'),
      color: 'hover:border-purple-500 hover:bg-purple-50/40',
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm mb-6">
      <div className="text-xs font-semibold text-slate-700 mb-3 flex items-center justify-between">
        <span>Quick Terminal Actions</span>
        <span className="text-[11px] text-slate-400 font-normal">Fast-access for registrar & cashier</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {actions.map((act) => (
          <button
            key={act.label}
            onClick={act.onClick}
            className={`flex items-center gap-3 p-3 text-left rounded-lg border border-slate-200 bg-slate-50/50 transition-all ${act.color} group`}
          >
            <div className="p-2 rounded-md bg-white border border-slate-200 shadow-xs group-hover:scale-105 transition-transform">
              {act.icon}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-brand-700">
                {act.label}
              </div>
              <div className="text-[11px] text-slate-500">{act.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};