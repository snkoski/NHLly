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
import {
  loader as teamInfoLoader,
  TeamContainer,
} from './routes/teamContainer';
import { TeamStats, loader as teamsStatsLoader } from './routes/teamStats';
import { TeamInfo, loader as teamsInfoLoader } from './routes/teamInfo';
import { TeamRoster, loader as teamsRosterLoader } from './routes/teamRoster';

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
        <Route
          element={<TeamContainer />}
          loader={teamInfoLoader}
          path="teams/:teamId"
        >
          <Route
            element={<TeamInfo />}
            loader={teamsInfoLoader}
            path="/teams/:teamId/info"
          />
          <Route
            element={<TeamStats />}
            loader={teamsStatsLoader}
            path="/teams/:teamId/stats"
          />
          <Route
            element={<TeamRoster />}
            loader={teamsRosterLoader}
            path="/teams/:teamId/roster"
          />
        </Route>
      </Route>
    </Route>,
  ),
);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
