import { Player, PlayerSeason } from '../types/types';
import { matchSorter } from 'match-sorter';

export async function getTeams(query: string | null) {
  try {
    const response = await fetch(`${import.meta.env.VITE_NHL_API_URL}/teams`);
    const data = await response.json();
    console.log('getTeams data', data);
    let teams = data.teams;
    if (query) {
      teams = matchSorter(teams, query, {
        keys: ['locationName', 'name', 'shortName', 'teamName'],
      });
    }

    return teams;
  } catch (error) {
    const caughtError = error as Error;
    console.error(caughtError.message);
  }
}

export async function getTeam(teamId: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_NHL_API_URL}/teams/${teamId}`,
    );
    const data = await response.json();
    console.log('getTeam data', data);

    return data.teams[0];
  } catch (error) {
    const caughtError = error as Error;
    console.error(caughtError.message);
  }
}

export async function getRoster(teamId: string, query: string | null) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_NHL_API_URL}/teams/${teamId}?expand=team.roster`,
    );
    const data = await response.json();
    console.log('getRoster data', data);
    let roster: Player[] = data.teams[0].roster.roster;
    if (query) {
      roster = matchSorter(roster, query, {
        keys: ['person.fullName'],
      });
    }
    const abbreviation: string = data.teams[0].abbreviation;
    return { abbreviation, roster };
  } catch (error) {
    const caughtError = error as Error;
    console.error(caughtError.message);
  }
}

export async function getPlayer(playerId: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_NHL_API_URL}/people/${playerId}`,
    );
    const data = await response.json();
    console.log('getPlayer data', data);

    return data.people[0];
  } catch (error) {
    const caughtError = error as Error;
    console.error(caughtError.message);
  }
}

export async function getTeamSeasonStats(teamId: string) {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_NHL_API_URL
      }/teams/${teamId}?expand=team.stats&season=20212022`,
    );
    const data = await response.json();
    console.log('getTeamSeasonStats data', data);

    return data.teams[0];
  } catch (error) {
    const caughtError = error as Error;
    console.error(caughtError.message);
  }
}

export async function getPlayerYearByYearStats(playerId: string) {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_NHL_API_URL
      }/people/${playerId}/stats?stats=yearByYear`,
    );
    const data = await response.json();
    console.log('getPlayerYearByYearStats data', data);
    const nhlSeasons = data.stats[0].splits.filter(
      (season: PlayerSeason) => season.league.name === 'National Hockey League',
    );
    return nhlSeasons;
  } catch (error) {
    const caughtError = error as Error;
    console.error(caughtError.message);
  }
}

export async function getPlayerPlayoffYearByYearStats(playerId: string) {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_NHL_API_URL
      }/people/${playerId}/stats?stats=yearByYearPlayoffs`,
    );
    const data = await response.json();
    console.log('getPlayerPlayoffYearByYearStats data', data);
    const nhlPlayoffSeasons = data.stats[0].splits.filter(
      (season: PlayerSeason) => season.league.name === 'National Hockey League',
    );
    return nhlPlayoffSeasons;
  } catch (error) {
    const caughtError = error as Error;
    console.error(caughtError.message);
  }
}
