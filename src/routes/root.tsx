import React from 'react';
import {
  Form,
  LoaderFunctionArgs,
  NavLink,
  Outlet,
  useLoaderData,
  useSubmit,
  useLocation,
} from 'react-router-dom';
import { Team } from '../../types/types';
import { getTeams } from '../requests';

type LoaderData = {
  searchTerm: string;
  teams: Team[];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get('team');
  const teams = await getTeams(searchTerm);
  return { searchTerm, teams };
}

export function Root() {
  const { searchTerm, teams } = useLoaderData() as LoaderData;
  const submit = useSubmit();
  const location = useLocation();

  React.useEffect(() => {
    const searchInput = document.getElementById('search') as HTMLInputElement;
    searchInput.value = searchTerm;
  }, [searchTerm]);

  return (
    <>
      <div className=" flex w-96 flex-col border-r-[1px] border-red-600 bg-red-400">
        <h1>Teams</h1>
        <div>
          <Form role="search">
            <input
              aria-label="search form"
              defaultValue={searchTerm}
              id="search"
              name="team"
              onChange={(event) => {
                const isFirstSearch = searchTerm == null;
                submit(event.currentTarget.form, {
                  action: location.pathname,
                  replace: !isFirstSearch,
                });
              }}
              placeholder="Search Teams"
              type="search"
            />
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
                      to={`teams/${team.id}/info`}
                    >
                      {team.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No teams found</p>
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
