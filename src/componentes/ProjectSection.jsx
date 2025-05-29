import React, { Suspense } from "react"
const MappedProjects = React.lazy(()=> import('./MappedProjects.jsx'))
export default function ProjectSection () {
    return(
        <>
          <div className='line'>
                <article className='line-separetor'></article>
                </div>
                <h2 className='projects-title'>Projects ✨</h2>
            <Suspense fallback={<div>Cargando..</div>}>
               <MappedProjects/>
            </Suspense>
        </>
    )
}