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
  teamSearch: string;
  teams: Team[];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const teamSearchTerm = url.searchParams.get('team');
  const teams = await getTeams(teamSearchTerm);
  return { teamSearchTerm, teams };
}

export function Root() {
  const { teamSearch, teams } = useLoaderData() as LoaderData;
  const submit = useSubmit();
  const location = useLocation();

  React.useEffect(() => {
    const searchInput = document.getElementById('search') as HTMLInputElement;
    if (teamSearch) searchInput.value = teamSearch;
  }, [teamSearch]);

  return (
    <>
      <div>
        <header>NHLly</header>
      </div>
      <div className="flex">
        <div className=" w-fit border-r-[1px] bg-neutral-50 p-4 text-black">
          <Form role="search">
            <input
              aria-label="team search form"
              className=" rounded-md border-2 px-2"
              defaultValue={teamSearch}
              id="search"
              name="team"
              onChange={(event) => {
                const isFirstSearch = teamSearch == null;
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
                  <li className="my-1" key={team.id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'text-blue-500' : ''
                      }
                      to={`teams/${team.id}`}
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
        <div className=" w-full bg-neutral-200 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
