export function PlayerImage(playerId, teamAbbreviation) {
  return (
    <picture>
      <source
        srcSet={`http://nhl.bamcontent.com/images/headshots/current/168x168/${playerId}.jpg`}
      />
      <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;"></img>
    </picture>
  );
}
