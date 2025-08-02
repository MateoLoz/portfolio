import "../App.css";
import React, { Suspense } from "react";
import LoadPage from "../Pages/LoadPage";
import { useLoading } from "../hooks/useLoading";
const WelcomeBanner = React.lazy(() => import("../Welcome/WelcomeBanner"));

const AboutMe = React.lazy(() => import("../AboutMe/AboutMe"));
const NavegationBar = React.lazy(() => import("../Navbar/NavegationBar"));
const MapperProjects = React.lazy(() => import("../projects/MapperProjects"));
const Footer = React.lazy(() => import("../Footer/Footer"));

const PortafolioPage = () => {
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
