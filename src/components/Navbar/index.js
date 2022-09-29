import { useContext } from "react";
import StarshipContext from "../../context/StarshipContext";
import { ReactComponent as Search } from "../../assets/search.svg";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { onSearch } = useContext(StarshipContext);
  const navigate = useNavigate();

  return (
    <div className="flex navbar w-[80%] m-auto align items-center">
      <div className=" navbar-b flex items-center">
        <div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="ml-8">
          <ul className="flex">
            <li className="mr-[30px]">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/starships">Starships</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex relative input-area bg-[#343434] rounded-[10px] opacity-[.7] px-[10px]">
        <input
          type="text"
          placeholder="Search Starships"
          className="h-[45px]"
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              navigate("/starships?q=" + e.target.value);
            }
          }}
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search className="bg-[#343434] fill-[#6b6b6b] h-[45px]" />
      </div>
    </div>
  );
};

export default Navbar;
