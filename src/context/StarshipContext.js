import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [allStarship, setAllStarships] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [isMoreData, setIsMoreData] = useState(false);
  const prevData = useRef();

  useEffect(() => {
    axios("https://swapi.dev/api/starships/").then((response) =>
      setAllStarships(response.data)
    );
  }, []);

  const loadMoreData = async () => {
    const res = await axios(allStarship.next).then((response) => response.data);
    if (!!res.next) {
      const allStarshipTemp = { ...allStarship };
      const cancat = allStarshipTemp.results.concat(res.results);
      allStarshipTemp.next = res.next;
      allStarshipTemp.results = cancat;
      setAllStarships(allStarshipTemp);
    } else {
      setIsMoreData(true);
    }
  };

  const onSearch = (value) => {
    setTimeout(() => {
      if (prevData.current !== filteredData) {
        const filteredStarShip = allStarship.results.filter(
          (e) =>
            e.name.toLowerCase().includes(value) ||
            e.model.toLowerCase().includes(value)
        );
        prevData.current = filteredStarShip;
        setFilteredData(filteredStarShip);
      }
    }, 1000);
  };

  // console.log("Allstarships", allStarship);

  const addLocalStorage = (id) => {
    const localIdFromStorage = localStorage.getItem("localId");
    const recentPost =
      localIdFromStorage === null ? [] : JSON.parse(localIdFromStorage);

    if (!recentPost.some((e) => e === id)) {
      recentPost.push(id);
      localStorage.setItem("localId", JSON.stringify(recentPost));
    }
  };

  const values = {
    allStarship,
    setAllStarships,
    onSearch,
    filteredData,
    loadMoreData,
    isMoreData,
    addLocalStorage,
  };

  return (
    <StarshipContext.Provider value={values}>
      {children}
    </StarshipContext.Provider>
  );
};

export default StarshipContext;
