import '../App.css'
import React, { Suspense } from 'react'

const NavBar = React.lazy(()=> import('../componentes/Navbar'))
const AboutMe = React.lazy(()=> import('../componentes/AboutMe'))
const ProjectSection = React.lazy(()=> import('../componentes/ProjectSection'))
const Footer = React.lazy(()=> import('../componentes/Footer'))
export const PortafolioPage = () => {

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
         <main id='projects' className='projects-list'>
            <Suspense fallback={<div>Cargando..</div>}>
               <ProjectSection/>
            </Suspense>
         </main>
         <footer id='contact' className='footer-portfolio'>
          <Footer/>
         </footer>
       </div>

    )
}