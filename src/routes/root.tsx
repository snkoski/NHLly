import React from 'react';
import { Form, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { Team } from '../../types/types';
import { getTeams } from '../requests';

export async function loader() {
  const teams = await getTeams();
  return teams;
}

export function Root() {
  const teams = useLoaderData() as Team[];

  return (
    <>
      <div className=" flex w-96 flex-col border-r-[1px] border-red-600 bg-red-400">
        <h1>Teams</h1>
        <div>
          <Form role="search">
            <input id="search" name="search" type="search" />
          </Form>
          <nav>
            {teams.length ? (
              <ul>
                {teams.map((team) => (
                  <li key={team.id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'bg-blue-300' : ''
                      }
                      to={`teams/${team.id}`}
                    >
                      {team.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Unable to load teams</p>
            )}
          </nav>
        </div>
      </div>
      <div className=" w-full bg-neutral-700">
        <Outlet />
      </div>
    </>
  );
}
