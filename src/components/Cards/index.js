import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.png";
import loader from "../../assets/loader.gif";
import StarshipContext from "../../context/StarshipContext";
import Card from "../Card";

const Cards = () => {
  const { allStarship, filteredData } = useContext(StarshipContext);
  const [errorList, setErrorList] = useState([]);
  const [data, setData] = useState([]);
  console.log("filtered", filteredData);

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
        <div className=" card-box grid grid-cols-4 gap-[2rem] w-[80%] m-auto my-[50px]">
          {data.map((element, index) => {
            const id = element.url.split("/")[5];
            const url = errorList.some((e) => e === id)
              ? noImage
              : `https://starwars-visualguide.com/assets/img/starships/${
                  element.url.split("/")[5]
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
      <div className="text-white flex justify-center items-center h-full">
        <img src={loader} alt="loader" className="h-[60px] mb-[50px]" />
        {/* Loading */}
      </div>
    );
  }
};

export default Cards;
