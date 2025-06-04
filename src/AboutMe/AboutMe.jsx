import '../styles/aboutme.css'
import {meText} from '../const/text.js'
import { useEffect, useState } from 'react'
import Arrow from '../../assets/icons/Arrow.jsx'
import { useInView } from 'react-intersection-observer'
export default function AboutMe () {
    const [width,setWidth] = useState(0)

    const {ref, inView} = useInView({
        threshold:0.7
    })

    const handleWidth = () => {
     setWidth(window.innerWidth)
    }

    useEffect(()=> {
    window.addEventListener('resize',handleWidth)
    handleWidth()
    return () => {window.removeEventListener('resize', handleWidth) }
    },[])



    return(
         <div ref={ref} id='about-me' className="about-me pb-20">
         <div className='about-me-text-container'>
             {width > 650 ? <div className={`arrow ${inView ? 'apear' : ''}`}>
                <Arrow width={'64px'} height={'64px'}/>
             </div> : null} 
            <div className='text-container'>
             <div className={`about-about absolute  pt-[1.25rem]`}>
              (About)
             </div>
             <div className='flex overflow-hidden'>
                  <p className={`about-me-paraghap ${inView ? 'apear' : ''}`}>{meText[0]}</p>
             </div>
             <div className='flex overflow-hidden'>
                  <p className={`about-me-paraghap1 ${inView ? 'apear' : ''}`}>{meText[1]}</p>
             </div>
               <div className='flex overflow-hidden'>
                  <p className={`about-me-paraghap1 ${inView ? 'apear' : ''}`}>{meText[2]}</p>
             </div>
              <div className='flex overflow-hidden'>
                  <p className={`about-me-paraghap1 ${inView ? 'apear' : ''}`}>{meText[3]}</p>
             </div>
             <div className='flex overflow-hidden'>
                  <p className={`about-me-paraghap1 ${inView ? 'apear' : ''}`}>{meText[4]}</p>
             </div>
              <div className='flex overflow-hidden'>
                  <p className={`about-me-paraghap1 ${inView ? 'apear' : ''}`}>{meText[5]}</p>
             </div>
            </div>
         </div>
         </div>

    )
}