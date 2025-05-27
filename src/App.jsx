import {BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css'
import { PortafolioPage } from './Pages/PortafolioPage'
import { AdminPage } from './Pages/AdminPage'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PortafolioPage/>}/>
       <Route path='/Admin' element={<AdminPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
