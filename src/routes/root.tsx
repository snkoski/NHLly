import React from 'react';
import { Form, NavLink, Outlet } from 'react-router-dom';
import { Team, Errorz } from '../types';

export function Root() {
  const [teams, setTeams] = React.useState<Team[]>([]);

  const getTeams = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_NHL_API_URL}/teams`);
      const { teams } = await response.json();

      setTeams(teams);
    } catch (error) {
      const caughtError = error as Errorz;
      console.error(caughtError.message);
    }
  };

  React.useEffect(() => {
    getTeams();
  }, []);

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
                      to={`teams/:teamId`}
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
      <div>
        <Outlet />
      </div>
    </>
  );
}
