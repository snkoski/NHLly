import React from 'react';
import {
  LoaderFunctionArgs,
  NavLink,
  Outlet,
  useLoaderData,
} from 'react-router-dom';
import { Team } from '../../types/types';
import { getTeam } from '../requests';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, `params.teamId is required`);
  const team = await getTeam(params.teamId);
  return team;
}

export function TeamContainer() {
  const team = useLoaderData() as Team;

  return (
    <div>
      <h1>Team Info Will Go Here</h1>
      <p>{team.name}</p>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'bg-blue-300' : '')}
              to={`/teams/${team.id}/info`}
            >
              Info
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'bg-blue-300' : '')}
              to={`/teams/${team.id}/stats`}
            >
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'bg-blue-300' : '')}
              to={`/teams/${team.id}/roster`}
            >
              Roster
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
