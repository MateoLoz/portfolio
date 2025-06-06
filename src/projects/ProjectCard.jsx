import { useEffect, useRef } from 'react'
import './style/mapperprojects.css'
import { useNavigate } from 'react-router'
export default function ProjectCard ({items, ref, inView}) {
  const videoRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;

        if (!video) return;

        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);


  const nav = useNavigate()
  const route = `/project/${items.nombre}`
    return(
        <div ref={ref} className={`card-mapped-container ${inView ? 'active' : ''}`}>
         <span className="project-type absolute top-4 left-5">
          {items.type}
         </span>
         <header className='video-container'>
            <video ref={videoRef} className="overflow-hidden w-full h-full" muted loop>
            <source src={items.demo} type="video/mp4" />
         </video>
         </header>
         <div className='w-full pt-1'>
            <span className='pl-1 project-name'>{items.nombre}</span>
         </div> 
         <div className='w-full pt-1'>
           <a className='pl-1 know-more-tag' href={route} onClick={()=>nav(route,{state:{nombre:items.nombre,type:items.type,demo:items.demo,descripcion:items.descripcion,tecnology:items.tecnology,repo:items.repo,url:items.url}})}>Know More</a>
           <span className='underline'></span>
         </div>
        </div>
    )
}