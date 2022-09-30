import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.png";
import loader from "../../assets/loader.gif";
import StarshipContext from "../../context/StarshipContext";
import Card from "../Card";

const Cards = (props) => {
  const { allStarship, filteredData } = useContext(StarshipContext);
  const [errorList, setErrorList] = useState([]);
  const [data, setData] = useState([]);
  // console.log("filtered", filteredData);

  useEffect(() => {
    if (!!allStarship.results || filteredData.length > 0) {
      const res = filteredData.length > 0 ? filteredData : allStarship.results;
      setData(res);
    }
  }, [filteredData, allStarship]);

  const onErrorImage = (value) => {
    setErrorList((prev) => [...prev, value]);
  };

  if (data.length > 0)
    return (
      <>
        <div
          data-testid={props.testid}
          className="card-box grid grid-cols-1 gap-[1.5rem] w-[90%] m-auto my-[50px] sm:grid-cols-2 md:w-[80%] lg:grid-cols-3 gap-[2rem] xl:grid-cols-4"
        >
          {data.map((element, index) => {
            const id = element.url.split("/")[5];
            const url = errorList.some((e) => e === id)
              ? noImage
              : `https://starwars-visualguide.com/assets/img/starships/${element.url.split("/")[5]
              }.jpg`;
            return (
              <Link
                to={`/detail/${id}`}
                state={{ data: element }}
                className="h-full"
                key={index}
              >
                <Card
                  id={id}
                  url={url}
                  name={element.name}
                  model={element.model}
                  hyperdrive_rating={element.hyperdrive_rating}
                  cargo_capacity={element.cargo_capacity}
                  onErrorImage={onErrorImage}
                />
              </Link>
            );
          })}
        </div>
      </>
    );
  else {
    return (
      <div
        data-testid="loading-data"
        className="text-white flex justify-center items-center h-full"
      >
        <img src={loader} alt="loader" className="h-[60px] mb-[50px]" />
      </div>
    );
  }
};

export default Cards;
