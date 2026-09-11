import type { IPlayers } from "../../type/type";
import PlayerCard from "./PlayerCard";

interface PlayerProps {
  players: IPlayers[];
}

const AvailablePlayer = ({ players }: PlayerProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {players.map((player:IPlayers, index) => {
        return (
          <PlayerCard player={player} 
            key={index}
          ></PlayerCard>
        );
      })}
    </div>
  );
};

export default AvailablePlayer;
