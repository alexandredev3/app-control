import React from 'react'
import { useContext } from 'react';

import { AuthContext } from '../hooks/AuthContext';

import { PrivateRoutes } from './auth.routes';
import { PublicRoutes } from './app.routes';

export function Routes() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <PrivateRoutes /> : <PublicRoutes />;
} 