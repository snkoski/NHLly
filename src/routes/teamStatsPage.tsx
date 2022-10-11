import React from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { TeamStats } from '../../types/types';
import { getTeamSeasonStats } from '../requests';
import invariant from 'tiny-invariant';
import { TeamRankingTable } from '../components/TeamRankingTable';

// type LoaderData = {

// }

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, `params.teamId is required`);
  const team = await getTeamSeasonStats(params.teamId);
  const stats = team.teamStats[0].splits[0].stat;
  const rankings = team.teamStats[0].splits[1].stat;

  return { rankings, stats };
}

export function TeamStatsPage() {
  const { rankings, stats } = useLoaderData() as TeamStats;

  return (
    <div id="team-stats">
      <TeamRankingTable countingStats={stats} ranking={rankings} />
    </div>
  );
}
