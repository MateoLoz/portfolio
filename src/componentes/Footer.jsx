import { useInView } from "react-intersection-observer";

export default function Footer () {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

    return(
        <footer ref={ref} id='contact' className={`footer-portfolio ${inView ? 'visible' : ''}`}>
        <div className='line'>
        <article className='line-separetor'></article>
          </div>
            <section className='contact-me'>
              <h2 style={{fontFamily:'Arial'}}>Contact Me 📧</h2>
              <aside style={{marginTop:'40px', display: 'flex', flexDirection:'column', gap:'1rem', alignItems:'start', textAlign:'center'}}>
               <small style={{fontSize:'18px', color:' rgb(206, 206, 206)', fontFamily:'Arial'}}>Email:<a href=""> mateobinance1@gmail.com</a> </small>
              <small style={{fontSize:'18px', color:' rgb(206, 206, 206)', fontFamily:'Arial'}}>Phone: +543813015875 </small>
              </aside>
              <small style={{marginTop:'40px', fontSize:'12px', color:'rgb(158, 158, 158)', fontFamily:'Arial'}}>@MateoLoz  2025</small>
            </section>
        </footer>
    )
}