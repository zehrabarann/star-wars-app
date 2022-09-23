import { useContext } from "react"
import close from "../../assets/close.svg"
import search from "../../assets/search.svg"
import StarshipContext from "../../context/StarshipContext";



const Navbar = () => {
    const { onSearch } = useContext(StarshipContext);

    return (
        <div className="flex navbar w-[80%] m-auto align items-center">
            <div>
                <ul className="flex">
                    <li className="mr-[30px]">Home</li>
                    <li>Starship</li>
                </ul>
            </div>

            <div className="flex relative input-area">
                <input
                    type="text"
                    placeholder="Please type the word you want to search for"
                    className="h-[45px]"
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default Navbar