import React from 'react';
import {
  Link,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
} from 'react-router-dom';
import invariant from 'tiny-invariant';
import { Player } from '../../types/types';
import { getRoster } from '../requests';

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, `params.teamId is required`);
  const roster = await getRoster(params.teamId);
  return roster;
}

export function TeamRoster() {
  const players = useLoaderData() as Player[];

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.person.id}>
              <Link to={`/players/${player.person.id}`}>
                {player.person.fullName}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
