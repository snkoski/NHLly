import React from 'react';
import {
  Link,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
} from 'react-router-dom';
import invariant from 'tiny-invariant';
import { Player } from '../../types/types';
import { PlayerDetails } from '../components/PlayerDetails';
import { getRoster } from '../requests';

type LoaderData = {
  abbreviation: string;
  roster: Player[];
};

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, `params.teamId is required`);
  const teamInfo = await getRoster(params.teamId);
  const roster = teamInfo.roster.roster;
  const { abbreviation } = teamInfo;
  console.log('teamInfo', teamInfo);

  return { abbreviation, roster };
}

export function TeamRoster() {
  const { abbreviation, roster } = useLoaderData() as LoaderData;
  console.log('players', roster);

  return (
    <div>
      <h1>Teams</h1>
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
