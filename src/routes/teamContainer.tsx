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
import { TeamHeader } from '../components/TeamHeader';

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, `params.teamId is required`);
  const team = await getTeam(params.teamId);
  return team;
}

export function TeamContainer() {
  const team = useLoaderData() as Team;

  return (
    <div className="flex flex-col p-6 text-black ">
      <div className="text-center">
        <TeamHeader teamId={team.id} teamName={team.name} />
      </div>
      <nav className="mb-4 ">
        <ul className="flex justify-evenly">
          <li className="">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? 'block w-40 rounded-lg bg-white px-2 py-3 text-center text-base font-medium text-blue-500 underline '
                  : 'block w-40 rounded-lg bg-white px-2 py-3 text-center text-base font-medium text-blue-500 '
              }
              to={`/teams/${team.id}/info`}
            >
              Info
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? 'block w-40 rounded-lg bg-white px-2 py-3 text-center text-base font-medium text-blue-500 underline '
                  : 'block w-40 rounded-lg bg-white px-2 py-3 text-center text-base font-medium text-blue-500 '
              }
              to={`/teams/${team.id}/stats`}
            >
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? 'block w-40 rounded-lg bg-white px-2 py-3 text-center text-base font-medium text-blue-500 underline '
                  : 'block w-40 rounded-lg bg-white px-2 py-3 text-center text-base font-medium text-blue-500 '
              }
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
