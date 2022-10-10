type TeamLogoProps = {
  size: 'small' | 'large';
  teamId: string;
};

export function TeamLogo({ teamId, size }: TeamLogoProps) {
  const sizeClass = size === 'small' ? 'h-6 w-6' : 'h-40 w-40';
  return (
    <img
      className={`inline ${sizeClass}`}
      src={`https://www-league.nhlstatic.com/nhl.com/builds/site-core/d1b262bacd4892b22a38e8708cdb10c8327ff73e_1579810224/images/logos/team/current/team-${teamId}-light.svg`}
    />
  );
}
