import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
      <div
        data-testid="breadcrumb-test"
        className="breadcrumb text-white w-[80%] m-[20px] m-auto sm:m-auto ml-[10px]"
      >
        <ul className="breadcrumb flex">
          <li className="pr-4">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/starships">Starships</a>
          </li>
        </ul>
      </div>
      <Cards testid="starship-page-cards" />
      <div className="flex justify-center">
        <button
          className="load-more-button w-[220px] h-[44px] px-[16px] bg-white text-[18px] border-[2px] border-[#d1d1d1] rounded-[10px] mb-[30px] text-[767676] text-center hover:bg-[#767676] text-[#333]"
          onClick={loadMoreData}
        >
          {isMoreData ? "Nothing more to load" : "Load More"}
        </button>
      </div>
    </>
  );
};

export default Starships;
