import React, { Suspense } from "react";
import { useLocation } from "react-router";
import LoadPage  from './LoadPage'
import { useLoading } from "../hooks/useLoading";



export default function ProjectDetail () {
    const location = useLocation()
    const {loading} = useLoading()
    const {nombre,type,demo,descripcion,tecnology,repo,url} = location.state || {}
    return(
        <>
{loading === true 
? <LoadPage/> 
: <div>
     <h2>{nombre}</h2>
     <h2>{type}</h2>
     <h2>{demo}</h2>
        </div>
    }
</>
    )
}