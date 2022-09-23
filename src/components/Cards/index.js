import { useContext } from "react";
import background from "../../assets/millennium-falcon.webp"
import StarshipContext from "../../context/StarshipContext";



const Cards = () => {
    const { allStarship, filteredData } = useContext(StarshipContext)

    const data = filteredData.length > 0 ? filteredData : allStarship.results

    if (Object.keys(allStarship).length > 0)
        return (
            <>
                <div className="grid grid-cols-4 gap-4 w-[80%] m-auto my-[50px]">
                    {
                        data.map((element, index) => {
                            return (
                                <div key={index} className="starship-box rounded-[10px] shadow-md">
                                    <p className="border-b-[1px] inline-block border-[#b2afaf] font-bold">{element.name}</p>
                                    <img src={background} alt="logo" className="my-4" />
                                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Model:</span>{element.model}</p>
                                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Hyperdrive rating:</span>{element.hyperdrive_rating}</p>
                                    <p className="p-[2px]"><span className="font-bold pr-[8px]">Cargo Capaticy:</span>{element.cargo_capacity}</p>

                                </div>
                            )
                        })
                    }
                </div>
                <button className="bg-white">Load More</button>
            </>
        )
    else {
        return (
            <>Loading</>
        )
    }

}

export default Cards