import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.png"
import StarshipContext from "../../context/StarshipContext";
import Card from "../Card";

const Cards = () => {
    const { allStarship, filteredData, loadMoreData, isMoreData } = useContext(StarshipContext)
    const [errorList, setErrorList] = useState([]);

    const data = filteredData.length > 0 ? filteredData : allStarship.results

    //If starship has not image
    const onErrorImage = (value) => {
        setErrorList((prev) => [...prev, value])
    }

    if (Object.keys(allStarship).length > 0)
        return (
            <>
                <div className=" card-box grid grid-cols-4 gap-[2rem] w-[80%] m-auto my-[50px]">
                    {
                        data.map((element, index) => {
                            const id = element.url.split("/")[5];
                            const url = errorList.some((e) => e === id) ? noImage : `https://starwars-visualguide.com/assets/img/starships/${element.url.split("/")[5]}.jpg`
                            return (
                                <Link to={`/detail/${id}`} state={{ data: element }} className='h-full' key={index}>
                                    <Card 
                                        url={element.url}
                                        noImage={url}
                                        name={element.name}
                                        model={element.model}
                                        hyperdrive_rating= {element.hyperdrive_rating}
                                        cargo_capacity={element.cargo_capacity}
                                        onErrorImage={onErrorImage}
                                    />
                                </Link>
                            )
                        })
                    }
                </div >
                <div className="flex justify-center">
                    <button className="load-more-button bg-white border-[2px] rounded-[10px] mb-[30px] p-[5px] text-center" onClick={loadMoreData}>{isMoreData ? 'Nothing more to load' : 'Load More'}</button>


                </div>

            </>
        )
    else {
        return (
            <>Loading</>
        )
    }

}

export default Cards