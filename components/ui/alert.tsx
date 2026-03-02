import React from 'react';

export function Alert({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-4 rounded-lg border flex items-center gap-2 ${className || 'bg-yellow-100 text-yellow-800 border-yellow-300'}`}>{children}</div>;
}

export function AlertDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={className || ''}>{children}</span>;
}
