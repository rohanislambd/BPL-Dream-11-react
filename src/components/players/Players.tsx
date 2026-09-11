import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayers } from "../../type/type";
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayers from "./SelectedPlayers";
interface PlayerProps{
    playersPromise: Promise<IPlayers[]>
    coin: number,
    setCoin: Dispatch<SetStateAction<number> >
}

const Players = ({playersPromise, coin, setCoin}:PlayerProps) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    // console.log(players);

    const [buttonType, setButtonType] = useState("available");
    // console.log(buttonType);

    const handleUpadebuttonType = (type: "available" | "selected") =>{
        setButtonType(type)
    }
    return (
        <div className="container mx-auto
        ">
            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bold text-xl ">{ buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
                <div>
                  <button 
                  onClick={() => handleUpadebuttonType("available")}
                  className={`btn ${buttonType === "available" ? 'btn-success' : ""} rounded-r-none`}>Available</button>

                  <button 
                   onClick={() => handleUpadebuttonType("selected")}
                   className={`btn ${buttonType === "selected" ? 'btn-success' : ""} rounded-r-none`}>Selected</button>
                </div>
            </div>
            
            { buttonType === "available" ? <AvailablePlayer
            coin ={coin}
            setCoin={setCoin}
            players ={players}
            ></AvailablePlayer> : <SelectedPlayers></SelectedPlayers> }
            
        </div>
    );
};

export default Players;