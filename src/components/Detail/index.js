import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import StarshipContext from "../../context/StarshipContext";
import Navbar from "../Navbar";
import noImage from "../../assets/no-image.png"


const Detail = () => {
    const { allStarship } = useContext(StarshipContext);
    const [errorList, setErrorList] = useState([]);

    const { state } = useLocation();
    console.log('state', state)

    const id = state.data.url.split("/")[5];

    const url = errorList.some((e) => e === id) ? noImage : `https://starwars-visualguide.com/assets/img/starships/${state.data.url.split("/")[5]}.jpg`

    const onErrorImage = (value) => {
        setErrorList((prev) => [...prev, value])
    }

    return (
        <>
        
        <Navbar/>
        
            <div className="flex bg-white w-[80%] m-auto rounded-[10px] my-[30px]">
                <div className="w-[40%]">
                    <img onError={() => onErrorImage(state.data.url.split("/")[5])} src={url} alt="logo" />
                </div>
                <div className="w-[60%]">
                    <span className="text-[25px] font-bold">{state.data.name}</span>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Model:</span>{state.data.model}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Hyperdrive rating:</span>{state.data.hyperdrive_rating}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Cargo Capaticy:</span>{state.data.cargo_capacity}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Passenger:</span>{state.data.passenger}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Max Atmosfering Speed:</span>{state.data.max_atmosphering_speed}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Manufacturer:</span>{state.data.manufacturer}</p>
                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Crew:</span>{state.data.crew}</p>
                </div>
            </div>

        </>
    )
}

export default Detail