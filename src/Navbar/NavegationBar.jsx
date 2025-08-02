import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import "./style/navbar.css";

export default function NavegationBar() {
  const nav = useNavigate();
  const route = "/Contact-Mateo";
  const [width, setwidth] = useState(0);
  const [scroll, setScroll] = useState(false);
  const navRef = useRef();
  const [click, setclick] = useState(false);
  const [menu, setOpenMenu] = useState(false);

  const handlewidth = () => {
    setwidth(window.innerWidth);
  };

  useEffect(() => {
    handlewidth();
    const handleScroll = () => {
      const top = navRef.current.getBoundingClientRect().top;
      setScroll(top < 0);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handlewidth);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handlewidth);
    };
  }, []);

  return (
    <div ref={navRef} className="navegation-bar">
      <nav>
        <section>
          {" "}
          <a
            href=""
            className="relative flex flex-col uppercase overflow-hidden"
          >
            <span className={`logo-primary ${scroll ? "scrolled" : ""}`}>
              mateo lozano
            </span>
            <span
              className={`logo-secondary absolute translate-y-full-h[3rem] ${
                scroll ? "scrolled" : ""
              }`}
            >
              {" "}
              @ml
            </span>
          </a>
        </section>
        {width > 650 ? (
          <ul className="navegation-ul" onClick={() => setclick(!click)}>
            <li>
              {" "}
              <a href="#about-me">Home,</a>
            </li>
            <li>
              {" "}
              <a href="#projects">Projects,</a>
            </li>
            <li>
              <a href="#Curriculum">Cv</a>
            </li>
          </ul>
        ) : null}
        {width > 650 ? (
          <section className="cursor-pointer" onClick={() => nav(route)}>
            Contact Mateo
          </section>
        ) : (
          <Menu setopen={setOpenMenu} menu={menu} />
        )}
      </nav>
      {width < 650 ? (
        <Modal menu={menu} scroll={scroll} setOpenMenu={setOpenMenu} />
      ) : null}
    </div>
  );
}

export const Menu = ({ setopen, menu }) => {
  return (
    <section>
      <a
        href="#"
        className="relative flex flex-col  overflow-hidden"
        onClick={() => setopen(!menu)}
      >
        <span className={`logo-primary ${menu ? "scrolled" : ""}`}>Menu</span>
        <span
          className={`logo-secondary absolute translate-y-full-h[3rem] ${
            menu ? "scrolled" : ""
          }`}
        >
          close
        </span>
      </a>
    </section>
  );
};

export const Modal = ({ menu, setOpenMenu, scroll }) => {
  const nav = useNavigate();
  const route = "/Contact-Mateo";
  return (
    <>
      <div
        className={`modal-container ${menu == true ? "active" : ""} `}
        style={{
          animation:
            menu == true
              ? "fadein cubic-bezier(.23,1,.32,1) 700ms"
              : "fadeout cubic-bezier(.23,1,.32,1) 700ms",
          transform: `translateY(${scroll}px)`,
        }}
      >
        <ul className="w-full h-full items-center justify-center flex flex-col text-white text-3xl">
          <li className="p-6 w-full text-center  border-opacity-10">
            {" "}
            <a href="#about-me" onClick={() => setOpenMenu(!menu)}>
              Home
            </a>
          </li>
          <li className="p-6 w-full text-center border-opacity-10">
            {" "}
            <a href="#projects" onClick={() => setOpenMenu(!menu)}>
              Projects
            </a>
          </li>
          <li className="p-6 w-full text-center border-opacity-10">
            <a href="#Curriculum" onClick={() => setOpenMenu(!menu)}>
              Cv
            </a>
          </li>
          <li className="p-6 w-full text-center border-bottom-opacity-10  border-opacity-10">
            <a
              href="#Curriculum"
              onClick={() => {
                setOpenMenu(!menu);
                nav(route);
              }}
            >
              Contact Mateo
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
