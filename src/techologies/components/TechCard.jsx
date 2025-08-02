export const TechCard = ({ imageUrl, techName }) => {
  return (
    <article className=" w-[290px] h-[200px] flex justify-center items-center border-1 border-gray-400 rounded-md p-10">
      <img
        className="w-full h-full border-0 p-5 object-contain z-4"
        src={imageUrl}
        alt={techName}
        loading="lazy"
      />
    </article>
  );
};
