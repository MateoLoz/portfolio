import { useInView } from "react-intersection-observer"

export default function NavBar () {
   const {ref, inView} = useInView({
      threshold:0.5
   })

    return(
          <nav ref={ref} className={`navbar-container ${inView ? 'visible' : ''}`}>
            <ul>
               <li> <a href="#about-me">About Me</a> </li>
               <li> <a href="#projects">Projects</a> </li>
               <li><a href="#contact">Contact Me</a></li>
            </ul>
         </nav>
    )
}