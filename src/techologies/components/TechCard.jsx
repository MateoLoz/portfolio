export const TechCard = ({ imageUrl, techName }) => {
  return (
    <article className=" w-full h-hull flex justify-center items-center border-1 border-gray-300 rounded-md  p-[5vw] sm:p-[3vw] md:p-[3vw]  ">
      <img
        className="w-full h-full border-0    p-[5vw] sm:p-[3vw] md:p-[3vw]   object-contain z-4"
        src={imageUrl}
        alt={techName}
        loading="lazy"
      />
    </article>
  );
};
