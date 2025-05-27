import '../App.css'
import {text} from '../const/text'
import { useCV } from '../hooks/useCV'
import me from '../mocks/images/me.jpg'
import { proyects } from '../const/proyects'

export const PortafolioPage = () => {
   const {descargarCv,download} = useCV()
    return(
  
       <div className="app-container">
         <nav>
            <ul></ul>
         </nav>
         <header className="about-me-section">
            <section>
               <article className='celda-pintada' ></article>
            <h1 className='about-me-name' data-text="20 years old , Love football, Rugby, Rally, F1 and box! 🧉🧉 ">Mateo Lozano - React & Node.js Developer</h1>
            <small className='about-me-skill'>Building {text}</small>
            </section>
             <section>
           <img className='img-profile' src={me} alt="" width={'280px'} height={'280px'} />
           <aside className='btn-container'>
           <button className='btn-cv' onClick={(e)=>descargarCv(e,'en')}> {download.code == 'en' ? download.message : 'CV - English Version'}</button>
           <button className='btn-cv' onClick={(e)=>descargarCv(e,'esp')}>{download.code == 'esp' ? download.message : 'CV - Espanish Version'}</button>
           </aside>
            </section>
         </header>
          <div className='line'></div>
         <main className='projects-list'>
              <div className='line'>
               <article className='line-separetor'></article>
              </div>
            <h2 className='projects-title'>Projects</h2>
            <aside className='projects-conatiner'>
               {proyects.map((proyect)=>(
               <article className='card-proyect'>
                <header className='header-card-proyect'>
                  <small className='type-app service' style={{background: proyect.type != 'microservice' ? proyect.type == 'Front-end' ? '#38bdf8 ' : '#6366f1' : '#f59e0b'}}>{proyect.type}</small>
                  <h2>{proyect.nombre}</h2>
                </header>
                <aside className='body-card'>
                  <div class="project-demo">
                  <video src="demo.mp4" autoplay loop muted></video>
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
         </main>
         <footer className='footer-portfolio'>
            <div className='line'>
            <article className='line-separetor'></article>
          </div>
            <section className='contact-me'>
              <h2>Contact Me</h2>
            </section>
         </footer>
       </div>

    )
}