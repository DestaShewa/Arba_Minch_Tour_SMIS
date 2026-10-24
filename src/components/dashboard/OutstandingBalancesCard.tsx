import React from 'react';
import type { StudentOutstandingItem } from '../../services/dashboardService';
import { formatETB } from '../../utils/formatters';
import { AlertCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  students: StudentOutstandingItem[];
}

export const OutstandingBalancesCard: React.FC<Props> = ({ students }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Highest Outstanding Tuition</h4>
            <p className="text-xs text-slate-500">Follow-up list for registrar</p>
          </div>
        </div>
        <Link to="/fees" className="text-xs font-semibold text-brand-600 hover:text-brand-800">
          Invoices
        </Link>
      </div>

      <div className="space-y-3">
        {students.map((std) => (
          <div
            key={std.id}
            className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
          >
            <div>
              <p className="text-xs font-bold text-slate-800">{std.fullName}</p>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                <span className="font-semibold text-slate-600">{std.gradeLevel} - {std.section}</span>
                <span>•</span>
                <span className="flex items-center gap-1 font-mono text-slate-600">
                  <Phone className="w-2.5 h-2.5 text-slate-400" />
                  {std.guardianPhone}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-rose-600">
                {formatETB(std.balanceETB)}
              </span>
              <p className="text-[10px] text-rose-500 uppercase font-semibold">Overdue</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};