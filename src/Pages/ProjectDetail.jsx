import React, { Suspense } from "react";
import '../styles/projectdetail.css'
import { useLocation } from "react-router";
import LoadPage  from './LoadPage'
import { useLoading } from "../hooks/useLoading";
import { GithubIcon } from "../mocks/icons/GithubIcon";
const NavegationBar = React.lazy(()=> import('../Navbar/NavegationBar'))
const InfinitySlider = React.lazy(()=> import('../slider/InfinitySlider'))

export default function ProjectDetail () {
    const location = useLocation()
    const {loading} = useLoading()
    const {nombre,type,demo,descripcion,tecnology,repo,url} = location.state || {}
    return(
        <>
{loading === true 
? <LoadPage/> 
: <div>
    <Suspense fallback={<div>Cargando..</div>}>
       <NavegationBar/>
    </Suspense>
    <InfinitySlider nombre={nombre}/>
     <section className="w-full pt-4 pb-28">
      <span className="pl-5 pt-2 absolute">({type})</span>
      <p className=" descripcion-project font-var('PP Neue Montreal Book') text-3xl sm:text-5xl  indent-40 pl-5 pr-15 sm:pr-30">
      {descripcion}
      </p>
     </section>
     <section className="w-full pt-4 h-30 pb-10">
      <span className="pl-5 pt-2 absolute">(tecnology's)</span>
      <aside className="pl-35 pt-6 pr-30 w-full flex flex-row gap-5">
         {tecnology.map(items=>(
        <h2 key={items} className=" tecnology-tags font-var('PP Neue Montreal Book') whitespace-nowrap text-xl">#{items}</h2>
      ))}
      </aside>
     </section>
     <section className="w-full pt-4 h-40 pb-10 flex flex-col gap-4">
       <span className="pl-5 pt-2 absolute">(Demo)</span>
     <video className="pt-15 pl-5 pr-5 rounded-xl " autoPlay loop muted>
      <source className="rounded-xl" src={demo} type="video/mp4" />
     </video>
     <section className="w-full h-50 pl-5 pr-5">
       <span className="pl-5 pt-2 absolute">(Links and Repo)</span>
       <aside className="pl-5 pt-15 flex flex-row gap-4">
          <button className="btn-links"> <a href={url} target="_blank" className="text-black">Url</a> </button>
          <button className="btn-links"> <a href={repo} target="_blank"><GithubIcon width={'24px'} height={'24px'}/></a></button>
       </aside>
     </section>
     </section>
        </div>
    }
</>
    )
}