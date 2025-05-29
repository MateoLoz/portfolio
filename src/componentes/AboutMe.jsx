import {text} from '../const/text'
import '../App.css'
import me from '../mocks/images/me.jpg'
import { useCV } from '../hooks/useCV'
import { useInView } from 'react-intersection-observer'
export default function AboutMe () {
      const {descargarCv,download} = useCV()
const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });


return(
      <header ref={ref} className={`about-me-section ${inView ? 'entro' : 'sefue'}`} >
        <section className={`${inView ? 'entro' : 'sefue'}`}>
            <article className='celda-pintada'></article>
            <h1 className={`about-me-name`}  >Mateo Lozano - React & Node.js Developer</h1>
            <small className={'about-me-skill'}>Building {text}</small>
            </section>
            <section className={`${inView ? 'entro' : 'sefue'}`}>
            <img className={`img-profile ${inView ? 'entro' : 'sefue'}`} src={me} alt="" width={'280px'} height={'280px'} />
            <aside className='btn-container'>
            <button className={`btn-cv ${inView ? 'entro' : 'sefue'}`} onClick={(e)=>descargarCv(e,'en')}> {download.code == 'en' ? download.message : 'CV - English Version'}</button>
            <button className='btn-cv' onClick={(e)=>descargarCv(e,'esp')}>{download.code == 'esp' ? download.message : 'CV - Espanish Version'}</button>
            </aside>
        </section>
              
</header>
)
}