import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { useNetworkStore } from '../../store/useNetworkStore';
import { Wifi, WifiOff, RefreshCw, LogOut, Shield } from 'lucide-react';

export const Topbar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const { isOnline, isSimulatedOffline, toggleSimulatedOffline } = useNetworkStore();

  const isActuallyConnected = isOnline && !isSimulatedOffline;

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Arba Minch Academy</span>
            <span className="text-[10px] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full border border-blue-200">
              2017 E.C. (2024/2025)
            </span>
          </h1>
          <p className="text-xs text-slate-500">Sikela Campus, Arba Minch, Ethiopia</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Network & Offline Simulation Toggle */}
        <button
          onClick={toggleSimulatedOffline}
          title="Click to toggle simulated offline mode"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
            isActuallyConnected
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
              : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 animate-pulse'
          }`}
        >
          {isActuallyConnected ? (
            <>
              <Wifi className="w-3.5 h-3.5 text-emerald-600" />
              <span>Online</span>
            </>
          ) : (
            <>
              <WifiOff className="w-3.5 h-3.5 text-amber-700" />
              <span>Offline Mode (Simulated)</span>
            </>
          )}
        </button>

        {/* Sync Center Status Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
          <RefreshCw className="w-3 h-3 text-slate-500" />
          <span>Sync: Up to date</span>
        </div>

        {/* User Card & Logout */}
        <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
          <div className="text-right">
            <p className="text-xs font-bold text-slate-800 leading-tight">{user?.fullName}</p>
            <div className="flex items-center justify-end gap-1 mt-0.5">
              <Shield className="w-2.5 h-2.5 text-slate-400" />
              <span className="text-[10px] font-medium text-slate-500 tracking-wide uppercase">
                {user?.role}
              </span>
            </div>
          </div>

          <button
            onClick={() => logout()}
            title="Log out"
            className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};