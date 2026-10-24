import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatBreadcrumb = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace('-', ' ');
  };

  return (
    <nav className="flex items-center text-xs text-slate-500 mb-4" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-slate-900 flex items-center gap-1 font-medium">
        <Home className="w-3.5 h-3.5" />
        <span>Arba Minch</span>
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={to}>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-slate-400" />
            {isLast ? (
              <span className="font-semibold text-slate-800">{formatBreadcrumb(value)}</span>
            ) : (
              <Link to={to} className="hover:text-slate-900">
                {formatBreadcrumb(value)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};