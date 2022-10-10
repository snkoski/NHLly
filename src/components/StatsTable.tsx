import { PlayerSeason } from '../../types/types';

export function StatsTable({
  playerStats,
  position,
}: {
  playerStats: PlayerSeason[];
  position: string;
}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                      scope="col"
                    >
                      Team
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Year
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Games
                    </th>
                    {position === 'G' ? (
                      <>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Games Started
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Wins
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Losses
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Overtime Losses
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Shutouts
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Goals Against
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Shots Against
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Save Percentage
                        </th>
                      </>
                    ) : (
                      <>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Goals
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Assists
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Points
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Plus/Minus
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Game Winning Goals
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Penalty Minutes
                        </th>
                        <th
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                          scope="col"
                        >
                          Hits
                        </th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {playerStats.map((season) => {
                    const splitSeason = `${season.season.slice(
                      0,
                      4,
                    )} - ${season.season.slice(4)}`;
                    return (
                      <tr key={season.season + season.stat.timeOnIceß}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {season.team.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {splitSeason}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {season.stat.games}
                        </td>
                        {position === 'G' ? (
                          <>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.gamesStarted}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.wins}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.losses}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.ot || '0'}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.shutouts}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.goalsAgainst}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.shotsAgainst}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.savePercentage}
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.goals}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.assists}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.points}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.plusMinus}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.gameWinningGoals}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.penaltyMinutes}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {season.stat.hits}
                            </td>
                          </>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
