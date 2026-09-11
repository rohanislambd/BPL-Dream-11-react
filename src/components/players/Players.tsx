import { use } from "react";
import type { IPlayers } from "../../type/type";
import AvailablePlayer from "./AvailablePlayer";
interface PlayerProps{
    playersPromise: Promise<IPlayers[]>
}

const Players = ({playersPromise}:PlayerProps) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    // console.log(players);
    return (
        <div className="container mx-auto
        ">
            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bold text-xl">Available Players</h2>
                <div>
                  <button className="btn btn-success">Available</button>
                  <button className="btn ">Selected</button>
                </div>
            </div>
            
            <AvailablePlayer players ={players}></AvailablePlayer>
            
        </div>
    );
};

export default Players;