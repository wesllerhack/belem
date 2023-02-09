import React, { PropsWithChildren } from 'react';

import { AuthProvider } from './auth';
import { DataContext } from './DataContext';
import { ToastProvider } from './toast';


export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <DataContext>
      <ToastProvider>{children}</ToastProvider>
    </DataContext>
  </AuthProvider>
);
