import React from 'react';
import { Error, Person } from '../../types/types';

export function PlayerInfo() {
  const [player, setPlayer] = React.useState<Person | null>(null);

  const getPlayer = async (playerId: number) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_NHL_API_URL}/people/${playerId}`,
      );
      const { people } = await response.json();
      setPlayer(people[0]);
    } catch (error) {
      const caughtError = error as Error;
      console.error(caughtError.message);
    }
  };

  React.useEffect(() => {
    getPlayer(8480069);
  }, []);

  return (
    <div>
      <h1>{player && player.fullName}</h1>
    </div>
  );
}
