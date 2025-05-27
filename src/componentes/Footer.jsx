export default function Footer () {
    return(
        <>
        <div className='line'>
        <article className='line-separetor'></article>
          </div>
            <section className='contact-me'>
              <h2>Contact Me 📧</h2>
              <aside style={{marginTop:'40px', display: 'flex', flexDirection:'column', gap:'1rem', alignItems:'start', textAlign:'center'}}>
               <small style={{fontSize:'18px', color:' rgb(206, 206, 206)'}}>Email:<a href=""> mateobinance1@gmail.com</a> </small>
              <small style={{fontSize:'18px', color:' rgb(206, 206, 206)'}}>Phone: +543813015875 </small>
              </aside>
              <small style={{marginTop:'40px', fontSize:'12px', color:'rgb(158, 158, 158)'}}>@MateoLoz  2025</small>
            </section>
        </>
    )
}