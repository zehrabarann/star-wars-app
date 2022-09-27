import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.png";
import noImage2 from "../../assets/no-image.png";

const Card = ({ id, url, onErrorImage, name, model, hyperdrive_rating, cargo_capacity, noImage,}) => {
  console.log("id", `/detail/${url.split("/")[5]}`);
  return (
    <>
      <div className="starship-box rounded-[10px] shadow-md h-full">
        <div className="text-center">
          <p className="border-b-[2px] inline-block border-[#b2afaf] font-bold text-[20px] text-center">
            {name}
          </p>
        </div>
        <img
          onError={() => onErrorImage(url.split("/")[5])}
          src={noImage}
          alt="logo"
          className="my-4 text-center min-h-[250px] object-cover"
        />
        {/* <Image  src={noImage} fallbackSrc={noImage2} alt="logo" className="my-4 text-center min-h-[250px] object-cover" /> */}

        <p className="p-[2px]">
          <span className="font-bold pr-[8px]">Model:</span>
          {model}
        </p>
        <p className="p-[2px]">
          <span className="font-bold pr-[8px]">Hyperdrive rating:</span>
          {hyperdrive_rating}
        </p>
        <p className="p-[2px]">
          <span className="font-bold pr-[8px]">Cargo Capaticy:</span>
          {cargo_capacity}
        </p>
      </div>
    </>
  );
};

export default Card;
