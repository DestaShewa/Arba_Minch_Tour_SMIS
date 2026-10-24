import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
      <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-4">
        <ShieldAlert className="w-9 h-9" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900">Access Restricted</h2>
      <p className="text-sm text-slate-600 max-w-md mt-2 mb-6">
        Your current role does not have permission to view this module. Please return to your assigned workflow area or contact the administrator.
      </p>
      <Button variant="outline" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back
      </Button>
    </div>
  );
};