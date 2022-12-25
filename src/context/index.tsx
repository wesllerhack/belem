import React, { PropsWithChildren } from 'react';

import { DataContext } from './DataContext';

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <DataContext>
    {children}
  </DataContext>
);

export default AppProvider;
