import '../App.css'
import React, { Suspense } from 'react'
import { useInView } from "react-intersection-observer";
const NavBar = React.lazy(()=> import('../componentes/Navbar'))
const AboutMe = React.lazy(()=> import('../componentes/AboutMe'))
const ProjectSection = React.lazy(()=> import('../componentes/ProjectSection'))
const Footer = React.lazy(()=> import('../componentes/Footer'))


export const PortafolioPage = () => {

     const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });



    return(
  
       <div className="app-container">
          <div id='about-me' className='about-me-container'>
          <Suspense fallback={<div>Cargando..</div>}>
            <NavBar/>
          </Suspense>
          <Suspense fallback={<div>Cargando..</div>}>
            <AboutMe/>
          </Suspense>
         </div>
          <div className='line'></div>
         <main ref={ref} id='projects' className={`projects-list ${inView ? 'visible' : ''}`}>
            <Suspense fallback={<div>Cargando..</div>}>
               <ProjectSection/>
            </Suspense>
         </main>
            <Suspense fallback={<div>Cargando..</div>}>
               <Footer/>
            </Suspense>
       </div>

    )
}