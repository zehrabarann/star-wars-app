import { useContext, useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Cards from "../../components/Cards";
import Navbar from "../../components/Navbar";
import StarshipContext from "../../context/StarshipContext";

const Starships = () => {
  const { loadMoreData, isMoreData, onSearch, allStarship } =
    useContext(StarshipContext);
  const { search } = useLocation();

  useEffect(() => {
    if (!!search && !!allStarship.results) {
      const query = search.split("=")[1];
      if (!!query) {
        onSearch(query);
      }
    }
  }, [onSearch, allStarship, search]);
  return (
    <>
      <Navbar />
      <div className="breadcrumb text-white w-[80%] m-auto">
        <ul className="breadcrumb flex">
          <li className="pr-4">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/starships">Starships</a>
          </li>
        </ul>
      </div>
      <Cards />
      <div className="flex justify-center">
        <button
          className="load-more-button bg-white border-[2px] rounded-[10px] mb-[30px] p-[5px] text-center"
          onClick={loadMoreData}
        >
          {isMoreData ? "Nothing more to load" : "Load More"}
        </button>
      </div>
    </>
  );
};

export default Starships;
