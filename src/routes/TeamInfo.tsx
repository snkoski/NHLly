import React from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Team } from '../../types/types';
import { getTeam } from '../requests';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, `params.teamId is required`);
  const team = await getTeam(params.teamId);
  console.log('team', team);

  return team;
}

export function TeamInfo() {
  const team = useLoaderData() as Team;

  return (
    <div>
      <p className="text-3xl">Conference: {team.conference.name}</p>
      <p className="text-3xl">Division: {team.division.name}</p>
      <p className="text-3xl">Founded: {team.firstYearOfPlay}</p>
      <p className="text-3xl">
        Venue: {team.venue.name} - {team.venue.city}
      </p>
      <p className="text-3xl">
        Official Site:{' '}
        <a
          className="text-blue-400 underline"
          href={team.officialSiteUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          {team.officialSiteUrl}
        </a>
      </p>
    </div>
  );
}
