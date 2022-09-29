const Card = ({
  id,
  url,
  onErrorImage,
  name,
  model,
  hyperdrive_rating,
  cargo_capacity,
}) => {
  return (
    <>
      <div className="starship-box rounded-[10px] shadow-md h-full">
        <div className="text-center">
          <h2 className="starships-name border-b-[2px] inline-block border-[#b2afaf] font-bold text-[20px] text-center">
            {name}
          </h2>
        </div>
        <img
          onError={() => onErrorImage(id)}
          src={url}
          alt="logo"
          className="my-4 text-center min-h-[250px] object-cover"
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
