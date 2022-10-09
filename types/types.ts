export type Error = {
  message?: string;
  status?: string;
  statusText?: string;
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

export type Person = {
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
