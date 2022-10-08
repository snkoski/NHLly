import React from 'react';
import { Team, Errorz } from '../types';

export function TeamList() {
  const [teams, setTeams] = React.useState<Team[]>([]);

  const getTeams = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_NHL_API_URL}/teams`);
      const { teams } = await response.json();

      setTeams(teams);
    } catch (error) {
      const caughtError = error as Errorz;
      console.error(caughtError.message);
    }
  };

  React.useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <h3>{team.name}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
