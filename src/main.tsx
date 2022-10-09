import './App.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { Root, loader as rootLoader } from './routes/root';
import ErrorPage from './error-page';
import Index from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={rootLoader}
      path="/"
    >
      <Route errorElement={<ErrorPage />}>
        <Route element={<Index />} index />
      </Route>
    </Route>,
  ),
);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
