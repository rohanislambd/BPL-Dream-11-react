import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/players/Players";
import type { IPlayers } from "./type/type";

const playerFetch = async ():Promise<IPlayers[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data
}

function App() {
  // const playersPromise = playerFetch();
   const [playersPromise] = useState(() => playerFetch())
    const [coin , setCoin] = useState(1500)

  // console.log(playersPromise());
  return (
    <>
    <Nav coin={coin}></Nav>
    <Banner></Banner>
     <Suspense>
       <Players 
       playersPromise ={playersPromise} 
       coin={coin}
       setCoin={setCoin}
       ></Players>
     </Suspense>
    </>
  )
}

export default App
