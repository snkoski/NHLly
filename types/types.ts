export type Error = {
  message?: string;
  status?: string;
  statusText?: string;
};

export type Team = {
  abbreviation: string;
  conference: Conference;
  division: Division;
  firstYearOfPlay: string;
  id: string;
  locationName: string;
  name: string;
  officialSiteUrl: string;
  shortName: string;
  teamName: string;
  venue: Venue;
};

export type Player = {
  jerseyNumber: string;
  person: Person;
  position: Position;
};

export type Person = {
  alternateCaptain: boolean;
  birthDate: string;
  captain: boolean;
  currentAge: string;
  currentTeam: Team;
  fullName: string;
  height: string;
  id: number;
  link: string;
  nationality: string;
  primaryNumber: string;
  primaryPosition: Position;
  rookie: boolean;
  shootsCatches: string;
  weight: string;
};

export type Position = {
  abbreviation: string;
  code: string;
  name: string;
  type: string;
};

type Venue = {
  city: string;
  id: number;
  name: string;
};

type Conference = {
  id: number;
  name: string;
};

type Division = {
  id: number;
  name: string;
  nameShort: string;
};

export type TeamStats = {
  rankings: TeamRankings;
  stats: TeamCountingStats;
  type: TeamStatsType;
};

type TeamStatsType = {
  displayName: string;
  gameType: GameType;
};

type GameType = {
  description: string;
  id: string;
  postSeason: boolean;
};

type TeamCountingStats = {
  evGGARatio: number;
  faceOffWinPercentage: string;
  faceOffsLost: number;
  faceOffsTaken: number;
  faceOffsWon: number;
  gamesPlayed: number;
  goalsAgainstPerGame: number;
  goalsPerGame: number;
  losses: number;
  ot: number;
  penaltyKillPercentage: string;
  powerPlayGoals: number;
  powerPlayGoalsAgainst: number;
  powerPlayOpportunities: number;
  powerPlayPercentage: string;
  ptPctg: string;
  pts: number;
  savePctg: number;
  shootingPctg: number;
  shotsAllowed: number;
  shotsPerGame: number;
  winLeadFirstPer: number;
  winLeadSecondPer: number;
  winOppScoreFirst: number;
  winOutshootOpp: number;
  winOutshotByOpp: number;
  winScoreFirst: number;
  wins: number;
};

type TeamRankings = {
  evGGARatio: string;
  faceOffWinPercentage: string;
  faceOffsLost: string;
  faceOffsTaken: string;
  faceOffsWon: string;
  goalsAgainstPerGame: string;
  goalsPerGame: string;
  losses: string;
  ot: string;
  penaltyKillOpportunities: string;
  penaltyKillPercentage: string;
  powerPlayGoals: string;
  powerPlayGoalsAgainst: string;
  powerPlayOpportunities: string;
  powerPlayPercentage: string;
  ptPctg: string;
  pts: string;
  savePctRank: string;
  shootingPctRank: string;
  shotsAllowed: string;
  shotsPerGame: string;
  winLeadFirstPer: string;
  winLeadSecondPer: string;
  winOppScoreFirst: string;
  winOutshootOpp: string;
  winOutshotByOpp: string;
  winScoreFirst: string;
  wins: string;
};

export type PlayerSeason = {
  league: any;
  season: any;
  stat: any;
  team: any;
};
