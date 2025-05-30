import React, { useEffect, useRef, useState } from "react"
import  './style/navbar.css'
import LoadPage from "../Pages/LoadPage"

export default function NavegationBar  () {


    const [scroll,setScroll] = useState(false)
    const navRef = useRef()
    const [click,setclick] = useState(false)

    useEffect(()=> {
 
        const handleScroll = () => {
        const top = navRef.current.getBoundingClientRect().top;
         setScroll(top < 0)
        }
        window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return(
        <div ref={navRef}  className="navegation-bar">
        <LoadPage trigger={click} /> 
         <nav>
            <section> <a href="" className="relative flex flex-col uppercase overflow-hidden">
                <span className={`logo-primary ${scroll ? 'scrolled' : ''}`}>mateo lozano</span>
                <span className={`logo-secondary absolute translate-y-full-h[3rem] ${scroll ? 'scrolled' : ''}`}> @ml-</span>
            </a>
                </section>
            <ul className="navegation-ul" onClick={()=> setclick(!click)}>
              <li> <a href="#about-me">Home,</a></li>
              <li> <a href="#projects">Projects,</a></li>
              <li><a href="#Curriculum">Cv</a></li>
            </ul>
             <section>Contact Mateo</section>
         </nav>
        </div>
    )
} 