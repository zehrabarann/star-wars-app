import { useContext } from "react"
import StarshipContext from "../../context/StarshipContext";
import { ReactComponent as Search } from "../../assets/search.svg"
import logo from "../../assets/logo.png"



const Navbar = () => {
    const { onSearch } = useContext(StarshipContext);

    return (
        <div className="flex navbar w-[80%] m-auto align items-center">
            <div className="flex items-center">
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


            <div className="flex relative input-area bg-[#343434] rounded-[10px] opacity-[.7]">
                <input
                    type="text"
                    placeholder="Search Starships"
                    className="h-[45px]"
                    onChange={onSearch}
                />
                <Search className="bg-[#00000047] fill-[#6b6b6b] h-[45px]"/>
            </div>
        </div>
    )
}

export default Navbar