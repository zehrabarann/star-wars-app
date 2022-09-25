import Cards from "../Cards"
import Navbar from "../Navbar"
import error from "../../assets/jonathan-cooper.webp"


const Home = () => {
    return (
        <>
            <Navbar />
            {/* <Cards/> */}

            <div className="flex items-center h-[100vh] w-[80%] m-auto" >
                <div className="w-[40%]">
                    <h2 className="text-[50px] text-white">Star Wars Starships</h2>
                    <p className="text-[30px] text-white mb-[30px]">Starwars ships, in which you can find a lot of information from many passenger capacities to models, are ready to explore.</p>
                   <a href="/starships">
                   <button className="bg-[#dedede] p-[10px] rounded-[10px] font-semibold explore-button text-[20px]">Explore Starships</button>


                   </a>
                </div>
                <div className="w-[60%]">
                    <div className="ring">
                        <img src={error} alt="err" className="h-[250px]" />
                        <span className="circle"></span>
                    </div>
                    <div className="ring-two">
                        <span className="circle-two"></span>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Home