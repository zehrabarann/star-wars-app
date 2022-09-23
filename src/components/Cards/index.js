import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import background from "../../assets/millennium-falcon.webp"



const Cards = () => {
    const [starships, setStarships] = useState({});

    useEffect(() => {
        axios("https://swapi.dev/api/starships/")
            .then((response) => setStarships((response.data)))
    }, [])

    console.log(starships)

    console.log(setStarships)


        return (

            <div className="grid grid-cols-4 gap-4 w-[80%] m-auto my-[50px]">

                {
                    starships.results.map((element, index) => {
                        return (
                            <div key={index} className="starship-box rounded-[10px] shadow-md">
                                <p className="red  border-b-[1px]"><span className="font-bold">Name:</span>{element.name}</p>
                                <img src={background} alt="logo" className="mt-2" />
                                <p className="red p-[2px]"><span className="font-bold">Model:</span>{element.model}</p>
                                <p className="red p-[2px]"><span className="font-bold">Hyperdrive rating:</span>{element.hyperdrive_rating}</p>
                                <p className="red p-[2px]"><span className="font-bold">Cargo Capaticy:</span>{element.cargo_capacity}</p>

                            </div>
                        )
                    })
                }
            </div>
        )
    
}

export default Cards