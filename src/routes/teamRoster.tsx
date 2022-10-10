import React from 'react';
import {
  Form,
  Link,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useLocation,
  useSubmit,
} from 'react-router-dom';
import invariant from 'tiny-invariant';
import { Player } from '../../types/types';
import { PlayerDetails } from '../components/PlayerDetails';
import { getRoster } from '../requests';

type LoaderData = {
  abbreviation: string;
  playerSearch: string;
  roster: Player[];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.teamId, `params.teamId is required`);
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('player');
  const { abbreviation, roster } = await getRoster(params.teamId, searchTerm);

  return { abbreviation, roster, searchTerm };
}

export function TeamRoster() {
  const { abbreviation, playerSearch, roster } = useLoaderData() as LoaderData;
  const submit = useSubmit();
  const location = useLocation();

  React.useEffect(() => {
    const searchInput = document.getElementById('search') as HTMLInputElement;
    searchInput.value = playerSearch;
  }, [playerSearch]);

  return (
    <div id="team-roster">
      <Form role="search">
        <input
          aria-label="player search form"
          defaultValue={playerSearch}
          id="player-search"
          name="player"
          onChange={(event) => {
            const isFirstSearch = playerSearch == null;
            submit(event.currentTarget.form, {
              action: location.pathname,
              replace: !isFirstSearch,
            });
          }}
          placeholder="Search Teams"
          type="search"
        />
      </Form>
      <ul>
        {roster.map((player) => {
          return (
            <li key={player.person.id}>
              <Link to={`/players/${player.person.id}`}>
                <PlayerDetails teamAbbreviation={abbreviation} {...player} />
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
