export type Errorz = {
  message: string;
};

export type Team = {
  id: string;
  name: string;
};

export type Player = {
  jerseyNumber: string;
  person: Person;
  position: Position;
};

type Person = {
  fullName: string;
  id: number;
  link: string;
};

type Position = {
  abbreviation: string;
  code: string;
  name: string;
  type: string;
};
