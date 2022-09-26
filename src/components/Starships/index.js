import Cards from "../Cards"
import Navbar from "../Navbar"

const Starships = () => {
    return (
        <>

            <Navbar />
            <div className="breadcrumb text-white w-[80%] m-auto">
                <ul class="breadcrumb flex">
                    <li className="pr-4"><a href="/">Home</a></li>
                    <li ><a href="/starships">Starships</a></li>
                </ul>

            </div>
            <Cards />


        </>
    )
}

export default Starships