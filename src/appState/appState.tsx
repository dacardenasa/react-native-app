import React from 'react';
import {AuthProvider} from '@context/index';

export const AppState = ({children}: {children: JSX.Element}) => (
  <AuthProvider>{children}</AuthProvider>
);
