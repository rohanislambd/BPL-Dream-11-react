import { TbTrash } from "react-icons/tb";
import type { IPlayers } from "../../type/type";
import type { Dispatch, SetStateAction } from "react";

interface ISelectedPlayerCardProps{
    player: IPlayers
    selectedPlayers : IPlayers[];
     setSelectedPlayers:Dispatch<SetStateAction<IPlayers[]>>
     coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = (
    {player,
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin
    }: ISelectedPlayerCardProps) => {

     const handleRemovePlayer = (player:IPlayers) =>{
        const restPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName )
         setSelectedPlayers(restPlayers)

         const newCoinPrice  = coin + player.price
         setCoin(newCoinPrice)

    }
  return (
    <div>
      <div className="flex gap-2 justify-between items-center  border border-gray-200 rounded-xl py-2  px-4 ">
        <div className="flex justify-between items-center gap-2">
          <img src={player.playerImg} alt="" className="h-30 w-40 " />
          <div>
            <h2>{player.playerName}</h2>

            <p>{player.playerType}</p>
          </div>
        </div>
        <span
          onClick={() => handleRemovePlayer(player)}
          className="text-red-500 font-bold cursor-pointer"
        >
          <TbTrash></TbTrash>
        </span>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
