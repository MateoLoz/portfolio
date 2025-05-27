import {text} from '../const/text'
import me from '../mocks/images/me.jpg'
import { useCV } from '../hooks/useCV'

export default function AboutMe () {
      const {descargarCv,download} = useCV()

return(
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
)
}