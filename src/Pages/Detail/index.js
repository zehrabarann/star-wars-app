import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import StarshipContext from "../../context/StarshipContext";
import Navbar from "../../components/Navbar";
import noImage from "../../assets/no-image.png";
import Card from "../../components/Card";

const Detail = () => {
  const { allStarship, addLocalStorage } = useContext(StarshipContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [errorList, setErrorList] = useState([]);
  const [recentPost, setRecentPost] = useState([]);

  const state = useMemo(() => {
    if (location.state) return location.state;
    const foundedStarships = allStarship?.results?.find((starShip) => {
      const { url } = starShip;
      const idFromUrl = url.split("starships/").pop().slice(0, -1);
      return Number(id) === Number(idFromUrl);
    });
    return { data: foundedStarships || {} };
  }, [allStarship, location, id]);
  // console.log('element', recentPost)

  const url = errorList.some((e) => e === id)
    ? noImage
    : `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  const onErrorImage = (value) => {
    const findErrorLsit = errorList.some((e) => e === value);
    if (!findErrorLsit) {
      setErrorList((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    if (!!id) {
      addLocalStorage(id);
    }
  });

  useEffect(() => {
    let recentStars = localStorage.getItem("localId");
    if (!!recentStars && !!allStarship.results) {
      recentStars = JSON.parse(recentStars);
      const arr = []
      recentStars.forEach((e) => {
        const findIndex = recentStars.findIndex((q) => q === e)
        const findElement = allStarship.results.find((q) => {
          const qId = q.url.split("/")[5];
          return qId === e
        })
        if (!!findElement) {
          arr[findIndex] = findElement
        }
      });

      setRecentPost(arr)
    }
  }, [allStarship]);

  return (
    <>
      <Navbar />
      <div className="w-[90%] mx-[10%] mx-[5%] mb-[30px] float-left lg:w-[80%] lg:mx-[10%]">

        <button
          className="go-back-btn text-white underline text-[18px] float-left hover:scale-[1.015]"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        {/* <img src={back} alt="returnIcon" /> */}
      </div>

      <div data-testid="detail-starship-box" className="detail-box flex flex-col bg-white w-[90%] m-auto rounded-[10px] mb-[30px] sm:w-[90%] md:flex-row lg:w-[80%] border-grey">
        <div className="detail-image-area w-[100%] md:w-[40%]">
          <img className="rounded-t-[10px] w-full h-full md:rounded-none sm:h-full md:h-auto"
            onError={() => onErrorImage(state.data?.url.split("/")[5])}
            src={url}
            alt="logo"
          />
        </div>
        <div data-testid="detail-name" className="detail-inform-area w-full px-[10px]  py-[30px] md:w-[60%] px-[10px] sm:px-[50px]">
          <span

            className="detail-inf-name text-[22px] mb-[10px] font-bold border-b-[2px] border-[#b2afaf] md:text-[28px] mb-[0px]"
          >
            {state.data?.name}
          </span>
          <p className="p-[2px]">
            <span data-testid="detail-model" className="font-bold pr-[8px]">Model:</span>
            {state.data?.model}
          </p>
          <p className="p-[2px]">
            <span className="font-bold pr-[8px]">Hyperdrive rating:</span>
            {state.data?.hyperdrive_rating}
          </p>
          <p className="p-[2px]">
            <span className="font-bold pr-[8px]">Cargo Capaticy:</span>
            {state.data?.cargo_capacity}
          </p>
          <p data-testid="detail-passenger" className="p-[2px]">
            <span className="font-bold pr-[8px]">Passenger:</span>
            {state.data?.passengers}
          </p>
          <p className="p-[2px]">
            <span className="font-bold pr-[8px]">Max Atmosfering Speed:</span>
            {state.data?.max_atmosphering_speed}
          </p>
          <p className="p-[2px]">
            <span className="font-bold pr-[8px]">Manufacturer:</span>
            {state.data?.manufacturer}
          </p>
          <p className="p-[2px]">
            <span className="font-bold pr-[8px]">Crew:</span>
            {state.data?.crew}
          </p>
        </div>
      </div>

      <div className="last-view w-[90%] m-auto my-[80px] py-[80px] pt-0  md:pt-[80px] lg:w-[80%]">
        <h2
          data-testid="last-view-title"
          className="text-[30px] text-white mb-[20px] text-start"
        >
          Last View Starships
        </h2>
        <div className="last-view-boxs flex overflow-x-auto whitespace-nowrap	overflow-y-hidden py-[15px] ">
          {recentPost?.map((element, index) => {
            const idRecent = element.url.split("/")[5];
            const url = errorList.some((e) => e === idRecent)
              ? noImage
              : `https://starwars-visualguide.com/assets/img/starships/${element.url.split("/")[5]
              }.jpg`;
            return (
              <Link
                to={`/detail/${element.url.split("/")[5]}`}
                state={{ data: element }}
                className="h-full"
                key={index}
              >
                <Card
                  id={idRecent}
                  key={index}
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
      </div>
    </>
  );
};

export default Detail;
