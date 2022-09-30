import Navbar from "../../components/Navbar";
import circleImage from "../../assets/circle-image.png";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="image-text-box flex flex-col items-center w-[90%] m-auto mt-[30px] sm:flex-row w-[80%] mt-[130px] ">
        <div className="w-[40%] text-area sm: w-[90]">
          <h2 className="text-[50px] text-white">Star Wars Starships</h2>
          <p className="text-[30px] text-white mb-[30px]">
            Starwars ships, in which you can find a lot of information from many
            passenger capacities to models, are ready to explore.
          </p>

          <button
            onClick={() => navigate("/starships")}
            className="bg-[#dedede] p-[10px] rounded-[10px] font-semibold explore-button text-[20px]"
          >
            Explore Starships
          </button>
        </div>
        <div className="w-[60%] circle-ring">
          <div className="ring">
            <img
              src={circleImage}
              alt="err"
              className="h-[250px] mt-[70px] ml-[46px]"
            />
            <span className="circle"></span>
          </div>
          <div className="ring-two">
            <span className="circle-two"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export default Home;
