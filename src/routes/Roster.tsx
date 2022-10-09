import React from 'react';
import { Errorz, Player } from '../types';

export function Roster() {
  const [players, setPlayers] = React.useState<Player[]>([]);

  const getRoster = async (teamId: number) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_NHL_API_URL}/teams/${teamId}/roster`,
      );
      const { roster } = await response.json();

      setPlayers(roster);
    } catch (error) {
      const caughtError = error as Errorz;
      console.error(caughtError.message);
    }
  };

  React.useEffect(() => {
    getRoster(21);
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.person.id}>
              <h3>{player.person.fullName}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
