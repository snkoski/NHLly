import { PlayerInfo } from './routes/PlayerInfo';
import { Roster } from './routes/Roster';
import { TeamInfo } from './routes/TeamInfo';
import { TeamList } from './routes/root';

export default function App() {
  return (
    <div className="mx-auto my-8 mt-10 w-8/12 rounded border border-gray-200 p-4 shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none">
      <header>Header bar will go here</header>
      {/* <TeamList />
      <TeamInfo />
      <Roster /> */}
      <PlayerInfo />
      <footer>Footer will go here</footer>
    </div>
  );
}
