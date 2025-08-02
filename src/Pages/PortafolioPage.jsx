import "../App.css";
import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";

const AboutMe = React.lazy(() => import("../AboutMe/AboutMe"));
const WelcomeBanner = React.lazy(() => import("../welcome/WelcomeBanner"));
const Footer = React.lazy(() => import("../Footer/Footer"));
const NavegationBar = React.lazy(() => import("../Navbar/NavegationBar"));
import LoadPage from "../Pages/LoadPage";
import { useLoading } from "../hooks/useLoading";
const MapperProjects = React.lazy(() => import("../projects/MapperProjects"));
const PortafolioPage = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  const { loading } = useLoading();

  return (
    <>
      {loading == true ? (
        <LoadPage />
      ) : (
        <div className="app-container">
          <Suspense fallback={<div></div>}>
            <WelcomeBanner />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <NavegationBar />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <AboutMe />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <MapperProjects />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default PortafolioPage;
