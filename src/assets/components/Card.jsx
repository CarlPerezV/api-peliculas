const Card = ({ title, poster, year }) => {
  const URL_IMG = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="w-48 flex flex-col items-center justify-between border-2 p-4 rounded-xl overflow-hidden">
      <div className="flex flex-col ">
        <span className="font-semibold text-sm">{year}</span>
        <span className="font-semibold text-base pb-3">{title}</span>
      </div>
      <img className="w-40 rounded-xl" src={`${URL_IMG}${poster}`} alt="" />
    </div>
  );
};

export default Card;
