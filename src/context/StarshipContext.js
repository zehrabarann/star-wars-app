import axios from "axios";
import { createContext, useEffect, useState } from "react";


const StarshipContext = createContext();

export const StarshipProvider = ({children}) => {
    const [allStarship, setAllStarships] = useState({})
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        axios("https://swapi.dev/api/starships/")
            .then((response) => setAllStarships((response.data)))
    }, [])

    const onSearch = (e) => {
        setTimeout(() => {
            let value = e.target.value
            const filteredStarShip = allStarship.results.filter((e) => e.name.toLowerCase().includes(value) || e.model.toLowerCase().includes(value))       
            setFilteredData(filteredStarShip)
        },1000)
    }

    const values = {allStarship, setAllStarships, onSearch,filteredData}
    return(
        <StarshipContext.Provider value={values}>{children}</StarshipContext.Provider>
    )
}


export default StarshipContext