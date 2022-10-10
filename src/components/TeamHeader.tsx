import { TeamLogo } from './TeamLogo';

type TeamHeaderProps = {
  teamId: string;
  teamName: string;
};
export function TeamHeader({ teamId, teamName }: TeamHeaderProps) {
  return (
    <>
      <TeamLogo size="large" teamId={teamId} />
      <h1>{teamName}</h1>
    </>
  );
}
