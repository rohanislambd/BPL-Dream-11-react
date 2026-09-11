import { FaUser } from "react-icons/fa";
import type { IPlayers } from "../../type/type";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface IPlayerCardProps {
  player: IPlayers;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const PlayerCard = ({ player, coin, setCoin }: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(coin, setCoin);

  const handleSelectPlayer = () => {
    setIsSelected(true);
    const newCoinPrice = coin - player.price;
    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      toast(`${player.playerName}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Coin is not enough");
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm overflow-hidden border border-base-200 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        {/* Player Image */}
        <figure className="relative h-64 overflow-hidden bg-base-200">
          <img
            src={player.playerImg}
            alt={player.playerName}
            className="h-full w-full  transition-transform duration-500 hover:scale-105"
          />

          {/* Player Type Badge */}
          <div className="absolute right-4 top-4">
            <span className="badge badge-primary badge-lg font-semibold shadow-md">
              {player.playerType}
            </span>
          </div>
        </figure>

        {/* Card Body */}
        <div className="card-body p-5">
          {/* Player Name & Origin */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <FaUser className="text-primary" />
              {player.playerName}
            </h2>

            <p className="mt-1 text-sm text-base-content/60">{player.origin}</p>
          </div>

          <div className="divider my-1"></div>

          {/* Rating / Skills */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-base-content/60">
              Player Skills
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {/* Batting */}
              <div className="rounded-lg bg-base-200 p-3">
                <p className="text-xs text-base-content/50">Batting</p>
                <p className="mt-1 font-semibold">{player.battingStyle}</p>
              </div>

              {/* Bowling */}
              <div className="rounded-lg bg-base-200 p-3">
                <p className="text-xs text-base-content/50">Bowling</p>
                <p className="mt-1 font-semibold">{player.bowlingStyle}</p>
              </div>
            </div>
          </div>

          {/* Price & Button */}
          <div className="mt-3 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-base-content/50">Price</p>
              <h2 className="text-2xl font-bold text-primary">
                ${player.price}
              </h2>
            </div>

            <button
              onClick={() => handleSelectPlayer()}
              className={`btn btn-primary`}
              disabled={isSelected ? true : false}
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
