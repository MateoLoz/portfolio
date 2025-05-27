import { proyects } from "../const/proyects"
import { useRef } from "react"
export default function Card () {
    
       const parentRef = useRef()
         const handleDescription = (e, id) => {
          let parent = document.getElementById(id)
           parentRef.current = parent
          let hijo = parent.querySelector('p')
          hijo.style.opacity = 1;
          hijo.style.height = '70px'
         }
    
         const handleLeave = () => {
          let hijo = parentRef.current.querySelector('p')
          hijo.style.opacity = 0;
          hijo.style.height = '20px';
         }

    return(
        <aside className='projects-conatiner'>
        {proyects.map((proyect)=>(
        <article id={proyect.id} key={proyect.id} className='card-proyect' onMouseEnter={(e)=> handleDescription(e, proyect.id)} onMouseLeave={()=> handleLeave()}>
            <header className='header-card-proyect'>
                <small className='type-app service' style={{background: proyect.type != 'microservice' ? proyect.type == 'Front-end' ? 'rgba(0, 180, 216, 0.39)' : 'rgba(93, 95, 239, 0.54)' : 'rgba(252, 162, 17, 0.38)'}}>{proyect.type}</small>
                <h2>{proyect.nombre}</h2>
            </header>
                <aside className='body-card'>
                    <div class="project-demo">
                    <video  autoPlay loop muted>
                        <source src={proyect.demo} type='video/mp4' />
                    </video>
                    </div>
                    <p class="project-description">
                    {proyect.descripcion}
                    </p>
                <div class="project-tags">
                    {proyect.tecnology.map((tags)=>(
                <span class="tag">{tags}</span>
                    ))}
                </div>
            </aside>
            </article>
                ))}
        </aside>
    )
}