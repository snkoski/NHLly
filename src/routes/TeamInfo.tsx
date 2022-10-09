import React from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Team } from '../../types/types';
import { getTeam } from '../requests';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, `params.teamId is required`);
  const team = await getTeam(params.teamId);
  return team;
}

export function TeamInfo() {
  const team = useLoaderData() as Team;

  return (
    <div>
      <h1>Team Info Will Go Here</h1>
      <p>{team.name}</p>
    </div>
  );
}
