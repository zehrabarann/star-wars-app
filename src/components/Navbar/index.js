import { useState } from "react"
import searchimage from "../../assets/magnifying-glass.png"
import axios from "axios";
import close from "../../assets/close.svg"



const Navbar = () => {
    const [searchInput, setSearchInput] = useState("");

    const onSearch = (e) => {
        console.log(e.target.value);
        axios("https://swapi.dev/api/starships/")
            .then((response) => {
                setSearchInput((response.data.results))
                console.log(response.data.results)
            })

       
    }

    const filteredData = () => {
        searchInput.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(setSearchInput.toLowerCase())
        })

    

    }
    console.log("filtere data",filteredData)

    const searchOnClose = () => {
        console.log("success")
        setSearchInput([])
    }

    console.log("search Input !",searchInput)

    console.log(setSearchInput)
    return (
        <div className="flex navbar">
            <ul>
                <li>Home</li>
                <li>starship</li>
            </ul>
            <div className="flex relative">
                <input type="text" placeholder="Please type the word you want to search for" onChange={onSearch}
                />
                <button onClick={searchOnClose} className="absolute rigth-[40px]">
                    <img src={close} alt="closeImage" className="bg-white"/>
                </button>

                <img src={searchimage} alt="search-icon" className="h-[25px] bg-white" />
            </div>

      

        </div>


    )
}

export default Navbar