import type { Dispatch, SetStateAction } from "react";
import type { IPlayers } from "../../type/type";
import PlayerCard from "./PlayerCard";

interface PlayerProps {
  players: IPlayers[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers : IPlayers[];
  setSelectedPlayers:Dispatch<SetStateAction<IPlayers[]>>
}

const AvailablePlayer = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: PlayerProps) => {
  // console.log(coin, setCoin);
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {players.map((player:IPlayers, index) => {
        return (
          <PlayerCard player={player} 
            key={index}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></PlayerCard>
        );
      })}
    </div>
  );
};

export default AvailablePlayer;
