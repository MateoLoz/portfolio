import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/welcome.css";
import useDownloadCv from "./hooks/useDownloadCv";
const WelcomeBanner = () => {
  const [hasBeenInView, setHasBeenInView] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setHasBeenInView(true);
    }
  }, [inView]);
  const { handleCv, cvButton } = useDownloadCv();

  const Text = `Welcome to Mateo's Portfolio!`;
  const description = `In this portofolio you will find Mateo's experience, personal projects, academic projects, technologies, courses, interests and more!`;
  return (
    <div
      ref={ref}
      className={`z-4 w-full h-[95vh] flex flex-col gap-6 justify-center items-center ${
        hasBeenInView ? "apearbanner" : "hidebanner"
      }`}
    >
      <div className=" z-0 absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[40%] translate-y-[30%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <span
        className={`z-4  overflow-hidden font-[PP Neue Montreal Normal] text-black text-[clamp(1.6rem,5.3vw,3.5rem)] ${
          hasBeenInView ? "appertext" : "hidetext"
        }`}
      >
        {Text}
      </span>
      <p
        className={`z-4 md:w-[50vw] w-[90vw] font-[PP Neue Montreal Normal] text-gray-500 text-[clamp(0.8rem,2vw,1.1rem)] break-words whitespace-normal ${
          hasBeenInView ? "appeardescription" : "hidetext"
        }`}
      >
        {description}
      </p>
      <div
        className={`z-4 md:w-[50vw] w-[70vw] flex flex-row items-center justify-center gap-2 ${
          hasBeenInView ? "appearbuttons" : "hidetext"
        }`}
      >
        <a
          href="#projects"
          className="rounded-lg md:py-[10px] py-[6px] md:px-[20px] px-[8px] text-[12px] md:text-[16px] bg-[#121212]  text-white font-[PP Neue Montreal Normal] hover:bg-[#3a3a3a] transition"
        >
          go to Projects
        </a>
        <a
          onClick={(e) => handleCv(e)}
          className="rounded-lg md:py-[10px] py-[6px] md:px-[20px] px-[8px] text-[12px] md:text-[16px] text-[#121212] bg-[#fcfcfc] font-[PP Neue Montreal Normal] hover:bg-[#f7f7f7] transition ease-in-out duration-150"
        >
          {cvButton.message}
        </a>
      </div>
    </div>
  );
};

export default WelcomeBanner;
