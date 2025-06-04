import React, { Suspense } from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css'
const PortafolioPage = React.lazy(()=> import('./Pages/PortafolioPage'))
import { AdminPage } from './Pages/AdminPage'
import ProjectDetail from './Pages/ProjectDetail'


function App() {



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Suspense fallback={<div>Cargando..</div>}>
       <PortafolioPage/>
      </Suspense>}/>
       <Route path='/Admin' element={<AdminPage/>}/>
       <Route path='/project/:projectName' element={<Suspense fallback={<div>Cargando..</div>}>
        <ProjectDetail/>
       </Suspense>} />
    </Routes>
 
    </BrowserRouter>
    </>
  )
}

export default App
