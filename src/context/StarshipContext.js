import axios from "axios";
import { createContext, useEffect, useState } from "react";


const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => { 
    const [allStarship, setAllStarships] = useState({})
    const [filteredData, setFilteredData] = useState([])
    const [isMoreData, setIsMoreData] = useState(false);

    useEffect(() => {
        axios("https://swapi.dev/api/starships/")
            .then((response) => setAllStarships((response.data)))
    }, [])

    const loadMoreData = async () => {

        const res = await axios(allStarship.next)
            .then((response) => (response.data))
        if (!!res.next) {
            const allStarshipTemp = { ...allStarship }
            const cancat = allStarshipTemp.results.concat(res.results)
            allStarshipTemp.next = res.next;
            allStarshipTemp.results = cancat
            console.log('allStarShip', cancat)
            setAllStarships(allStarshipTemp);

        }
        else {
            setIsMoreData(true)
        }
    }

    const onSearch = (e) => {
        setTimeout(() => {
            let value = e.target.value
            const filteredStarShip = allStarship.results.filter((e) => e.name.toLowerCase().includes(value) || e.model.toLowerCase().includes(value))
            setFilteredData(filteredStarShip)
        }, 1000)
    }

    const values = { allStarship, setAllStarships, onSearch, filteredData, loadMoreData,isMoreData }
    return (
        <StarshipContext.Provider value={values}>{children}</StarshipContext.Provider>
    )
}


export default StarshipContext