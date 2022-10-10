import { TeamCountingStats, TeamRankings } from '../../types/types';

export function TeamRankingTable({
  countingStats,
  ranking,
}: {
  countingStats: TeamCountingStats;
  ranking: TeamRankings;
}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8" id="player-stats-table">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      className="w-24 py-3.5 px-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                      scope="col"
                    ></th>
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
                      Points
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Goals Per Game
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Goals Against Per Game
                    </th>

                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Shots Per Game
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Shooting Percentage
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Shots Allowed Per Game
                    </th>

                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Save Percentage
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Power Play For
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Power Play Goals
                    </th>

                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Power Play Percentage
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Power Play Goals Againts
                    </th>
                    <th
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Penalty Kill Percentage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-900">
                      Total
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {countingStats.wins}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {countingStats.losses}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {countingStats.pts}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {countingStats.goalsPerGame}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {countingStats.goalsAgainstPerGame}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {countingStats.shotsPerGame}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {countingStats.shootingPctg}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {countingStats.shotsAllowed}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {countingStats.savePctg}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {countingStats.powerPlayOpportunities}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {countingStats.powerPlayGoals}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {countingStats.powerPlayPercentage}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {countingStats.powerPlayGoalsAgainst}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {countingStats.penaltyKillPercentage}
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-900">
                      League Rank
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {ranking.wins}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {ranking.losses}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {ranking.pts}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {ranking.goalsPerGame}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {ranking.goalsAgainstPerGame}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {ranking.shotsPerGame}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {ranking.savePctRank}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {ranking.shotsAllowed}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {ranking.savePctRank}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {ranking.powerPlayOpportunities}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {ranking.powerPlayGoals}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {ranking.powerPlayPercentage}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-center text-sm text-gray-500">
                      {ranking.powerPlayGoalsAgainst}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      {ranking.penaltyKillPercentage}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
