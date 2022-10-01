import Navbar from "../../components/Navbar";
import circleImage from "../../assets/circle-image.png";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="image-text-box flex flex-col items-center m-auto w-[90%] sm:m-auto  md:flex-row lg:w-[80%] md:mt-[50px] lg:mt-[130px]">
        <div className="w-[90%] text-area md:w-[50%] lg:w-[40%]">
          <h2 className="text-2xl mb-[20px] md:text-[50px] text-white leading-[50px]">Star Wars Starships</h2>
          <p className="text-xl md:text-[30px] text-white mb-[30px]">
            Starwars ships, in which you can find a lot of information from many
            passenger capacities to models, are ready to explore.
          </p>

          <button
            onClick={() => navigate("/starships")}
            className="bg-[#dedede] p-[10px] rounded-[10px] font-semibold explore-button text-[20px] hover:bg-white hover:scale-[1.015]"
          >
            Explore Starships
          </button>
        </div>
        {window.screen.width > 478 &&
          <div className="hidden circle-ring sm:w-[60%] md:w-[50%] lg:w-[60%] lg:block">
            <div className="ring">
              <img
                src={circleImage}
                alt="err"
                className="h-[250px] mt-[70px] ml-[46px]"
              />
              <span className="circle"></span>
            </div>
            <div className="ring-two sm:hidden md:hidden xl:block">
              <span className="circle-two"></span>
            </div>
          </div>}
      </div>
    </>
  );
};

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export default Home;
