import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { useNetworkStore } from '../../store/useNetworkStore';
import { useToastStore } from '../../store/useToastStore';
import { SEED_USERS } from '../../mock-data/seedUsers';
import { ROLE_DEFAULT_ROUTES } from '../../routes/rolePermissions';
import { Button } from '../../components/ui/Button';
import { Lock, User, WifiOff, School, ArrowRight, ShieldCheck } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading } = useAuthStore();
  const { isOnline, isSimulatedOffline } = useNetworkStore();
  const { addToast } = useToastStore();

  const [identifier, setIdentifier] = useState('director');
  const [password, setPassword] = useState('password123');
  const [errorMsg, setErrorMsg] = useState('');

  const isActuallyOffline = !isOnline || isSimulatedOffline;

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    try {
      const user = await login({ identifier, password });
      addToast({
        type: 'success',
        title: `Welcome back, ${user.fullName}`,
        message: `Logged in as ${user.title}`,
      });

      const from = (location.state as { from?: { pathname?: string } })?.from?.pathname;
      navigate(from || ROLE_DEFAULT_ROUTES[user.role], { replace: true });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid credentials';
      setErrorMsg(msg);
      addToast({
        type: 'error',
        title: 'Authentication Failed',
        message: msg,
      });
    }
  };

  const handleQuickLogin = async (username: string) => {
    setIdentifier(username);
    try {
      const user = await login({ identifier: username, password: 'password123' });
      addToast({
        type: 'success',
        title: `Logged in as ${user.role}`,
        message: `${user.fullName} (${user.title})`,
      });
      navigate(ROLE_DEFAULT_ROUTES[user.role], { replace: true });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed';
      setErrorMsg(msg);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-600 text-white shadow-xl mb-4">
          <School className="w-9 h-9" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Arba Minch Academy
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Hybrid Offline-First School Management System • አርባ ምንጭ አካዳሚ
        </p>

        {isActuallyOffline && (
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-semibold">
            <WifiOff className="w-3.5 h-3.5 text-amber-700" />
            <span>Offline Authentication Enabled (Local Vault Active)</span>
          </div>
        )}
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-md rounded-2xl border border-slate-200">
          <form className="space-y-4" onSubmit={handleLogin}>
            {errorMsg && (
              <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-lg">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Username or Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  placeholder="e.g. director, secretary, cashier"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                />
              </div>
            </div>

            <Button type="submit" isLoading={isLoading} className="w-full py-2.5">
              Sign In to Terminal
            </Button>
          </form>

          {/* Quick Demo Login Matrix */}
          <div className="mt-8 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-3">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span>Instant Demo Login (Choose Role):</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {SEED_USERS.map((u) => (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => handleQuickLogin(u.username)}
                  className="p-2.5 text-left border border-slate-200 rounded-xl hover:border-brand-500 hover:bg-brand-50/50 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-brand-700">
                      {u.role}
                    </span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-brand-600" />
                  </div>
                  <span className="text-[11px] text-slate-500 truncate mt-1">
                    {u.fullName}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          Arba Minch Academy • Offline-First School Management Prototype
        </p>
      </div>
    </div>
  );
};