import { TbCoin } from 'react-icons/tb';
import Logo from '../assets/logo.png'


const Nav = ({coin}:{coin:number}) => {
  return (
    <div className='bg-red-100'>
      <nav className="flex justify-between items-center  container mx-auto">
        <img src={Logo} alt="" />
        <ul className="flex gap-4 items-center ">
          <li>Home</li>
          <li>Fixture</li>
          <li>Player</li>
          <li>Schedule</li>
        </ul>
        <strong className='font-bold text-3xl text-black flex gap-1 items-center' > <TbCoin />{coin}</strong>
      </nav>
    </div>
  );
};

export default Nav;
