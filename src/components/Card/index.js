const Card = ({ id, url, onErrorImage, name, model, hyperdrive_rating, cargo_capacity }) => {

  return (
    <>
      <div data-testid="starships-box" className="starship-box bg-white p-[25px] rounded-[10px] shadow-md h-full hover:scale-[1.015]">
        <div className="text-center">
          <h2
            data-testid="card-name"
            className="starships-name border-b-[2px] inline-block border-[#b2afaf] font-bold text-[20px] text-center"
          >
            {name}
          </h2>
        </div>
        <img
          onError={() => onErrorImage(id)}
          src={url}
          alt="logo"
          className="my-4 text-center min-h-auto object-cover mt-[20px] sm:h-[200px] md:min-h-[250px] m-auto"
        />
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
