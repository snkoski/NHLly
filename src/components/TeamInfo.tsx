import React from 'react';
import { Team, Errorz } from '../types';

export function TeamInfo() {
  const [team, setTeam] = React.useState<Team>();

  const getTeam = async (teamId: number) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_NHL_API_URL}/teams/${teamId}`,
      );

      const { teams: team } = await response.json();
      console.log(team);

      setTeam(team[0]);
    } catch (error) {
      const caughtError = error as Errorz;
      console.error(caughtError.message);
    }
  };

  React.useEffect(() => {
    getTeam(1);
  }, []);

  return (
    <div>
      <h1>Team Info Will Go Here</h1>
      <p>{team && team.name}</p>
    </div>
  );
}
