import React from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Team } from '../../types/types';
import { getTeam } from '../requests';
import invariant from 'tiny-invariant';
import { TeamLogo } from '../components/TeamLogo';

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
      <TeamLogo size="large" teamId={team.id} />
      <h1>Team Info</h1>
      <p>{team.name}</p>
      <span>Conference: {team.conference.name}</span>
      <span>Division: {team.division.name}</span>
      <span>Founded: {team.firstYearOfPlay}</span>
      <span>Location: {team.locationName}</span>
      <span>Official Site: {team.officialSiteUrl}</span>
      <span>Venue: {team.venue.name}</span>
      <span>Venue Location: {team.venue.city}</span>
    </div>
  );
}
