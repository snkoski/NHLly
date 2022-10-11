import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import invariant from 'tiny-invariant';
import {
  getPlayer,
  getPlayerPlayoffYearByYearStats,
  getPlayerYearByYearStats,
} from '../requests';
import { Person, PlayerSeason } from '../../types/types';
import { TeamLogo } from './TeamLogo';
import { StatsTable } from './StatsTable';

export interface ModalProps {
  /**
   * Determine the modal size when not in mobile view.
   *
   * Accepted values: big | small
   *
   * 'big' modal properties - sm:w-[684px] sm:min-w-[480px] sm:min-h-[720px] sm:pt-14 sm:px-32 sm:pb-32
   *
   * 'small' modal properties - sm:min-w-[375px] sm:max-w-[480px] sm:pt-7 sm:px-16 sm:pb-8
   *
   */
  dimensions?: 'big' | 'small';

  /**
   * Boolean to determine whether the modal is visible(true) or hidden(false)
   */
  show: boolean;
}

type LoaderData = {
  player: Person;
  playoffYearByYearStats: PlayerSeason[];
  yearByYearStats: PlayerSeason[];
};

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.playerId, `params.playerId is required`);
  const player = await getPlayer(params.playerId);
  const yearByYearStats = await getPlayerYearByYearStats(params.playerId);
  const playoffYearByYearStats = await getPlayerPlayoffYearByYearStats(
    params.playerId,
  );

  return { player, playoffYearByYearStats, yearByYearStats };
}

/**
 * Modal component
 * Implementation is based on the modal component from https://tailwindui.com/
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const { show, dimensions = 'small' } = props;

    const { player, playoffYearByYearStats, yearByYearStats } =
      useLoaderData() as LoaderData;

    const [currentStats, setCurrentStats] = React.useState('reg');
    const handleStatChange = (event: React.MouseEvent<HTMLButtonElement>) => {
      const selectedStats = (event.target as HTMLInputElement).value;

      if (selectedStats !== currentStats) {
        setCurrentStats(selectedStats);
      }
    };

    const modalSize =
      dimensions === 'big'
        ? `sm:w-[90%] sm:min-w-[480px] sm:min-h-[720px]`
        : `sm:min-w-[375px] sm:max-w-[480px]`;

    const navigate = useNavigate();

    const onClose = () => {
      navigate(-1);
    };

    return (
      <Transition.Root as={Fragment} show={show}>
        <Dialog
          className="fixed inset-0 z-10 overflow-y-auto p-0"
          onClose={onClose}
          ref={ref}
        >
          <div className="flex min-h-screen items-end justify-center pt-4 text-center sm:block sm:p-0 sm:pb-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* this is the backdrop */}
              <Dialog.Overlay className="fixed inset-0 bg-black/[.64]  transition-opacity " />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              aria-hidden="true"
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* actual modal starts here */}
              <div
                className={`relative inline-block transform overflow-hidden bg-white px-4 pt-3  pb-4 align-bottom transition-all sm:px-8 sm:pt-8 sm:pb-8 sm:align-middle ${modalSize}`}
              >
                <div className="flex flex-row items-center">
                  <div className={`absolute right-0 pr-6 text-2xl text-black`}>
                    <button
                      className={`h-5 w-5`}
                      onClick={onClose}
                      title="Close"
                    >
                      X
                    </button>
                  </div>
                </div>
                <div>
                  <div
                    className="flex flex-col items-center"
                    id="player-details"
                  >
                    <div>
                      <img
                        alt="player headshot"
                        className=" m-2 h-40 w-40 rounded-full bg-white"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = `https://assets.nhle.com/mugs/nhl/20192020/${player.currentTeam.abbreviation}/${player.id}.png`;
                        }}
                        src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.id}.jpg`}
                      />
                    </div>
                    {(player.captain ||
                      player.alternateCaptain ||
                      player.rookie) && (
                      <div className="text-amber-400">
                        {player.captain && 'Captain'}
                        {player.alternateCaptain && 'Alternate Captain'}
                        {player.rookie && 'Rookie'}
                      </div>
                    )}
                    <div>
                      <h1 className="text-black">
                        {player.fullName} |{' '}
                        {player.primaryPosition.abbreviation} | #
                        {player.primaryNumber} | {player.nationality}{' '}
                      </h1>
                    </div>
                    <div>
                      {/* position | height | weight | age: 21 | team logo team name */}
                      <span className="text-black">
                        {player.height} | {player.weight} lb | Age:{' '}
                        {player.currentAge} |{' '}
                        {player.primaryPosition.abbreviation === 'G'
                          ? 'Catches: '
                          : 'Shoots: '}
                        {player.shootsCatches} |{' '}
                        <TeamLogo size="small" teamId={player.currentTeam.id} />{' '}
                        {player.currentTeam.name}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      className={`${
                        currentStats === 'reg' ? 'underline' : ''
                      } mx-4 p-2 text-blue-500`}
                      onClick={(event) => handleStatChange(event)}
                      type="button"
                      value="reg"
                    >
                      Regular Season
                    </button>
                    <button
                      className={`${
                        currentStats === 'playoff' ? 'underline' : ''
                      }  mx-4 p-2 text-blue-500`}
                      onClick={(event) => handleStatChange(event)}
                      type="button"
                      value="playoff"
                    >
                      Playoffs
                    </button>
                    <div>
                      {currentStats === 'reg' && (
                        <StatsTable
                          playerStats={yearByYearStats}
                          position={player.primaryPosition.abbreviation}
                        />
                      )}
                      {currentStats === 'playoff' && (
                        <StatsTable
                          playerStats={playoffYearByYearStats}
                          position={player.primaryPosition.abbreviation}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  },
);

Modal.displayName = 'Modal';
