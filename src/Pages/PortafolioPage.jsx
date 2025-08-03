import "../App.css";
import React, { Suspense } from "react";

const AboutMe = React.lazy(() => import("../AboutMe/AboutMe"));
const WelcomeBanner = React.lazy(() => import("../welcome/WelcomeBanner"));
const Footer = React.lazy(() => import("../Footer/Footer"));
const NavegationBar = React.lazy(() => import("../Navbar/NavegationBar"));
const TechSection = React.lazy(() => import("../techologies/TechSection"));
import LoadPage from "../Pages/LoadPage";
import { useLoading } from "../hooks/useLoading";
const DeveloperJourney = React.lazy(()=> import("../RoadMap/RoadMap"));
const MapperProjects = React.lazy(() => import("../projects/MapperProjects"));
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
            <TechSection />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <MapperProjects />
          </Suspense>
            <Suspense fallback={<div></div>}>
            <DeveloperJourney/>
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
