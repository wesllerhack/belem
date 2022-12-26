import React, { PropsWithChildren } from 'react';

import { DataContext } from './DataContext';
import { ToastProvider } from './toast';


const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <DataContext>
    <ToastProvider>{children}</ToastProvider>
  </DataContext>
);

export default AppProvider;
