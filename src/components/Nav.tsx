import Logo from '../assets/logo.png'


const Nav = () => {
  return (
    <div className='bg-red-100'>
      <nav className="flex justify-between   container mx-auto">
        <img src={Logo} alt="" />
        <ul className="flex gap-4 items-center ">
          <li>Home</li>
          <li>Fixture</li>
          <li>Player</li>
          <li>Schedule</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
