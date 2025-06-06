import '../App.css'
import React, { Suspense } from 'react'
import { useInView } from "react-intersection-observer";

// const AboutMe = React.lazy(()=> import('../componentes/AboutMe'))
const AboutMe = React.lazy(()=> import('../AboutMe/AboutMe'))
const Footer = React.lazy(()=> import('../Footer/Footer'))
const NavegationBar = React.lazy(()=> import('../Navbar/NavegationBar'))
import LoadPage  from '../Pages/LoadPage'
import { useLoading } from '../hooks/useLoading';
const MapperProjects = React.lazy(()=> import('../projects/MapperProjects'))
 const PortafolioPage = () => {
   
     const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  const { loading } = useLoading()


    return(
      <>
      {loading == true ? <LoadPage/> : 
     <div className="app-container">
      <Suspense fallback={<div>Cargando..</div>}>
        <NavegationBar/>
      </Suspense>
      <Suspense fallback={<div>Cargando..</div>}>
        <AboutMe/> 
      </Suspense>
      <Suspense fallback={<div>Cargando..</div>}>
          <MapperProjects/>
      </Suspense>
       <Suspense fallback={<div>Cargando..</div>}>
          <Footer/>
       </Suspense>
    </div>
 }
       </>
    )
}


export default PortafolioPage