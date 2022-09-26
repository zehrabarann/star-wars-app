import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import StarshipContext from "../../context/StarshipContext";
import Navbar from "../Navbar";
import noImage from "../../assets/no-image.png";
import Card from "../Card";



const Detail = () => {
    const { allStarship, addLocalStorage } = useContext(StarshipContext);
    const [errorList, setErrorList] = useState([]);
    const [recentPost, setRecentPost] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams()
    const { state } = useLocation();

    const url = errorList.some((e) => e === id) ? noImage : `https://starwars-visualguide.com/assets/img/starships/${state.data.url.split("/")[5]}.jpg`

    const onErrorImage = (value) => {
        setErrorList((prev) => [...prev, value])
    }

    console.log(allStarship, 'allStarship')

    useEffect(() => {
        if (!!id) {
            addLocalStorage(id)
        }

    })

    useEffect(() => {
        let recentStars = localStorage.getItem("localId")
        if (!!recentStars && !!allStarship.results) {
            recentStars = JSON.parse(recentStars)
            const filteredData = allStarship.results.filter((e) => {
                const eId = e.url.split("/")[5];
                return recentStars.includes(eId)
            })
            setRecentPost(filteredData)
        }
    }, [allStarship])

    console.log('recent', recentPost)



    return (
        <>
            <Navbar />
            <div className="w-[80%] m-auto">
                {/* <img src={returnImage} alt="returnIcon"/> */}
                <button className="text-white underline text-[18px]" onClick={() => navigate(-1)}>Go Back</button>
            </div>

            <div className="flex bg-white w-[80%] m-auto rounded-[10px] my-[30px]">
                <div className="w-[40%]">
                    <img onError={() => onErrorImage(state.data.url.split("/")[5])} src={url} alt="logo" />
                </div>
                <div className="w-[60%] px-[50px] py-[30px]">
                    <span className="text-[28px] font-bold border-b-[2px] border-[#b2afaf]">{state.data.name}</span>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Model:</span>{state.data.model}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Hyperdrive rating:</span>{state.data.hyperdrive_rating}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Cargo Capaticy:</span>{state.data.cargo_capacity}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Passenger:</span>{state.data.passengers}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Max Atmosfering Speed:</span>{state.data.max_atmosphering_speed}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Manufacturer:</span>{state.data.manufacturer}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Crew:</span>{state.data.crew}</p>
                </div>
            </div>

            <div className=" w-[80%] m-auto my-[50px]">
                <h2 className="text-[30px] text-white">Last View</h2>
                <div className="last-view grid grid-cols-4 gap-[2rem]">
                    {recentPost.map((element, index) => {
                        return (
                            <Link to={`/detail/${id}`}>
                                <Card key={index}
                                    url={element.url}
                                    noImage={url}
                                    name={element.name}
                                    model={element.model}
                                    hyperdrive_rating={element.hyperdrive_rating}
                                    cargo_capacity={element.cargo_capacity}
                                    onErrorImage={onErrorImage}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Detail