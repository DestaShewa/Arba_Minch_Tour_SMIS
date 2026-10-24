import React, { useEffect, useState } from 'react';
import { dashboardService } from '../../services/dashboardService';
import type { DashboardMetrics } from '../../services/dashboardService';
import { StatCard } from '../../components/dashboard/StatCard';
import { QuickActionsBar } from '../../components/dashboard/QuickActionsBar';
import { AttendanceTrendChart } from '../../components/dashboard/AttendanceTrendChart';
import { RecentPaymentsTable } from '../../components/dashboard/RecentPaymentsTable';
import { OutstandingBalancesCard } from '../../components/dashboard/OutstandingBalancesCard';
import { formatETB, formatPercent } from '../../utils/formatters';
import { Users, GraduationCap, CalendarCheck, Coins, AlertCircle } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);
        const data = await dashboardService.getDashboardMetrics();
        setMetrics(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Failed to load metrics');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-xs text-slate-500 font-medium">Loading Arba Minch Academy terminal data...</p>
      </div>
    );
  }

  if (error || !metrics) {
    return (
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center text-rose-700">
        <AlertCircle className="w-8 h-8 mx-auto mb-2 text-rose-600" />
        <p className="font-semibold text-sm">Unable to load dashboard metrics</p>
        <p className="text-xs mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 1. Quick Actions Bar */}
      <QuickActionsBar />

      {/* 2. Top Metric KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Total Students"
          value={metrics.totalStudents}
          subtitle="KG to Grade 8 active"
          icon={<Users className="w-5 h-5 text-blue-600" />}
          colorScheme="blue"
        />

        <StatCard
          title="Active Teachers"
          value={metrics.totalTeachers}
          subtitle="Full-time staff"
          icon={<GraduationCap className="w-5 h-5 text-purple-600" />}
          colorScheme="purple"
        />

        <StatCard
          title="Today's Attendance"
          value={formatPercent(metrics.todayAttendanceRate)}
          subtitle="Latest recorded day"
          icon={<CalendarCheck className="w-5 h-5 text-emerald-600" />}
          colorScheme="emerald"
          trend={{ value: '92%', isPositive: true }}
        />

        <StatCard
          title="Fees Collected"
          value={formatETB(metrics.totalFeesCollectedThisMonthETB)}
          subtitle="This term total"
          icon={<Coins className="w-5 h-5 text-emerald-600" />}
          colorScheme="emerald"
        />

        <StatCard
          title="Outstanding Fees"
          value={formatETB(metrics.totalOutstandingFeesETB)}
          subtitle="Uncollected balance"
          icon={<AlertCircle className="w-5 h-5 text-amber-600" />}
          colorScheme="amber"
        />
      </div>

      {/* 3. Main Chart & Balances Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceTrendChart data={metrics.attendanceTrends} />
        </div>
        <div className="lg:col-span-1">
          <OutstandingBalancesCard students={metrics.topOutstandingStudents} />
        </div>
      </div>

      {/* 4. Recent Collections Table */}
      <RecentPaymentsTable payments={metrics.recentPayments} />
    </div>
  );
};