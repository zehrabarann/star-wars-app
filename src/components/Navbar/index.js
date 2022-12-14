import { useContext } from "react";
import StarshipContext from "../../context/StarshipContext";
import { ReactComponent as Search } from "../../assets/search.svg";
import logo from "../../assets/logo.png";
import { useLocation } from 'react-router-dom'


const Navbar = () => {
  const { onSearch } = useContext(StarshipContext);
  const location = useLocation()

  return (
    <div className="flex navbar w-[90%] m-auto lg:w-[80%] sm:m-auto align items-center">
      <div className=" navbar-b flex items-center w-full mr-[20px] sm:mr-auto sm:m-auto">
        <div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="ml-4 sm:ml-8">
          <ul className="flex">
            <li className="mr-[15px] sm:mr-[30px]">
              <a href="/" className="hover:underline hover:font-semibold">Home</a>
            </li>
            <li>
              <a data-testid="card-name" href="/starships" className="hover:underline hover:semibold">
                Starships
              </a>
            </li>
          </ul>
        </div>
      </div>

      {location.pathname === '/starships' &&
        <div className=" flex relative input-area bg-[#343434] rounded-[10px] opacity-[.7] px-[10px]">
          <input
            data-testid="search-input"
            type="text"
            placeholder="Search Starships"
            className="h-[45px]"
            // onKeyUp={(e) => {
            //   if (e.key === "Enter" || e.keyCode === 13) {
            //     navigate("/starships?q=" + e.target.value);
            //   }
            // }}
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="bg-[#343434] fill-[#6b6b6b] h-[45px]" />
        </div>
      }
    </div>
  );
};

export default Navbar;
