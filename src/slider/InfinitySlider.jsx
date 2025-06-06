import React from 'react';
import '../styles/projectdetail.css'

const InfinitySlider = ({nombre}) => {

const repeticiones = 4;
const elements = Array.from({ length: repeticiones }, (_, i) => (
    <React.Fragment key={i}>
      <h2 className="slider-text">{nombre}</h2>
      <h2 className="slider-text">/</h2>
    </React.Fragment>
  ));

return(
     <section className="pt-6 w-full flex flex-col gap-2 overflow-hidden">
      <aside className="slider w-full h-60 flex whitespace-nowrap items-center row ">
      {elements}
      {elements}
      </aside>
    </section>
)
}

export default InfinitySlider