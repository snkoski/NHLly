export async function getTeams() {
  try {
    const response = await fetch(`${import.meta.env.VITE_NHL_API_URL}/teams`);
    const { teams } = await response.json();
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
    const { teams: team } = await response.json();

    return team[0];
  } catch (error) {
    const caughtError = error as Error;
    console.error(caughtError.message);
  }
}
