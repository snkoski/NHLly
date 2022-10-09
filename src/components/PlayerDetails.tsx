import { Person, Position } from '../../types/types';

export type PlayerDetailsProps = {
  jerseyNumber: string;
  person: Person;
  position: Position;
  teamAbbreviation: string;
};

export function PlayerDetails({
  jerseyNumber,
  person,
  position,
  teamAbbreviation,
}: PlayerDetailsProps) {
  // console.log('props', props);

  return (
    <div className="flex items-center gap-2">
      <img
        alt="player headshot"
        className=" m-2 h-10 w-10 rounded-full bg-white"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = `https://assets.nhle.com/mugs/nhl/20192020/${teamAbbreviation}/${person.id}.png`;
        }}
        src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${person.id}.jpg`}
      />
      <span>{person.fullName}</span>
      <span>{position.abbreviation}</span>
      <span>#{jerseyNumber}</span>
    </div>
  );
}
