import React from 'react';
import type { FeePayment } from '../../types/fee';
import { formatETB } from '../../utils/formatters';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  payments: FeePayment[];
}

export const RecentPaymentsTable: React.FC<Props> = ({ payments }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900">Recent Collections</h4>
          <p className="text-xs text-slate-500">Latest cashier receipt transactions</p>
        </div>
        <Link
          to="/fees"
          className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-0.5"
        >
          <span>View Terminal</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-semibold uppercase">
              <th className="pb-2">Receipt</th>
              <th className="pb-2">Student</th>
              <th className="pb-2">Method</th>
              <th className="pb-2 text-right">Amount (ETB)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {payments.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50/75 transition-colors">
                <td className="py-2.5 font-mono font-semibold text-slate-700">
                  {p.receiptNumber}
                </td>
                <td className="py-2.5 font-medium text-slate-800">
                  {p.studentName}
                </td>
                <td className="py-2.5">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700">
                    {p.paymentMethod}
                  </span>
                </td>
                <td className="py-2.5 text-right font-bold text-slate-900">
                  {formatETB(p.amountPaidETB)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};