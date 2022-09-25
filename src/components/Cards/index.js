import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.png"
import StarshipContext from "../../context/StarshipContext";

const Cards = () => {
    const { allStarship, filteredData, loadMoreData ,isMoreData} = useContext(StarshipContext)
    const [errorList, setErrorList] = useState([]);

    const data = filteredData.length > 0 ? filteredData : allStarship.results

    //If starship has not image
    const onErrorImage = (value) => {
        setErrorList((prev) => [...prev, value])
    }

    if (Object.keys(allStarship).length > 0)
        return (
            <>
                <div className="grid grid-cols-4 gap-[2rem] w-[80%] m-auto my-[50px]">
                    {
                        data.map((element, index) => {
                            const id = element.url.split("/")[5];
                            const url = errorList.some((e) => e === id) ? noImage : `https://starwars-visualguide.com/assets/img/starships/${element.url.split("/")[5]}.jpg`
                            return (
                                <Link to={`/detail/${id}`} state={{ data: element }} className='h-full' key={index}>
                                    <div className="starship-box rounded-[10px] shadow-md h-full" >
                                        <p className="border-b-[2px] inline-block border-[#b2afaf] font-bold text-[20px]">{element.name}</p>
                                        <img onError={() => onErrorImage(element.url.split("/")[5])} src={url} alt="logo" className="my-4 text-center min-h-[250px] object-cover" />
                                        <p className="p-[2px]"><span className="font-bold pr-[8px]">Model:</span>{element.model}</p>
                                        <p className="p-[2px]"><span className="font-bold pr-[8px]">Hyperdrive rating:</span>{element.hyperdrive_rating}</p>
                                        <p className="p-[2px]"><span className="font-bold pr-[8px]">Cargo Capaticy:</span>{element.cargo_capacity}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div >

                <button className="bg-white border-[2px] rounded-[10px] mb-[30px] p-[5px]" onClick={loadMoreData}>{isMoreData ? 'Nothing more to load': 'Load More'}</button>
            </>
        )
    else {
        return (
            <>Loading</>
        )
    }

}

export default Cards