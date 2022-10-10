import React from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { TeamStats } from '../../types/types';
import { getTeamSeasonStats } from '../requests';
import invariant from 'tiny-invariant';

// type LoaderData = {

// }

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, `params.teamId is required`);
  const team = await getTeamSeasonStats(params.teamId);
  console.log('team stats', team.teamStats[0].splits[0].stat);
  const stats = team.teamStats[0].splits[0].stat;
  const rankings = team.teamStats[0].splits[1].stat;

  return { rankings, stats };
}

export function TeamStatsPage() {
  const { rankings, stats } = useLoaderData() as TeamStats;

  return (
    <div id="team-stats">
      <h1>Team Stats</h1>
      <p>
        Wins - {stats.wins} League Ranking - {rankings.wins}
      </p>
      <p>
        {stats.losses}
        {rankings.losses}
      </p>
      <p>
        {stats.pts}
        {rankings.pts}
      </p>
      <p>
        {stats.goalsPerGame}
        {rankings.goalsPerGame}
      </p>
      <p>
        {stats.goalsAgainstPerGame}
        {rankings.goalsAgainstPerGame}
      </p>
      <p>
        {stats.powerPlayOpportunities}
        {rankings.powerPlayOpportunities}
      </p>
      <p>
        {stats.powerPlayGoals}
        {rankings.powerPlayGoals}
      </p>
      <p>
        {stats.powerPlayPercentage}
        {rankings.powerPlayPercentage}
      </p>
    </div>
  );
}
