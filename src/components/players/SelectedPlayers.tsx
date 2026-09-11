import type { Dispatch, SetStateAction } from "react";
import type { IPlayers } from "../../type/type";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayersProps{
      selectedPlayers : IPlayers[];
      setSelectedPlayers:Dispatch<SetStateAction<IPlayers[]>>
       coin: number;
       setCoin: Dispatch<SetStateAction<number>>;
      
}
const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}:ISelectedPlayersProps) => {
    // console.log(selectedPlayers, 'form selected palayer');
   
    if(selectedPlayers.length ===  0){
      return <h3 className="font-bold text-4xl text-center mt-19 text-red-500">NO Selected Player</h3>
    }

    return (
        <div className=" mt-6">
            
            {
                selectedPlayers.map((player: IPlayers, index:number)=> {
                   return (
                    <SelectedPlayerCard
                    key={index}
                    player={player}
                        selectedPlayers ={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                        coin={coin}
                        setCoin={setCoin}
                    ></SelectedPlayerCard>
                   )
                })
            }
        </div>
    );
};

export default SelectedPlayers;