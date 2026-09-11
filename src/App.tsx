import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/players/Players";
import type { IPlayers } from "./type/type";

const playersPromise = async ():Promise<IPlayers[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data
}

function App() {
  // console.log(playersPromise());
  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
     <Suspense>
       <Players playersPromise ={playersPromise()}></Players>
     </Suspense>
    </>
  )
}

export default App
