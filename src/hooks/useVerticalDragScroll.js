import { useEffect, useRef } from "react";

export default function useScrollBySection() {
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      e.preventDefault(); // bloquea scroll natural
      e.stopPropagation();
      isScrolling.current = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newScroll = window.scrollY + direction * window.innerHeight;

      window.scrollTo({
        top: newScroll,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}
