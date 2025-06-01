
import { Route, Routes } from 'react-router-dom'
import './App.css'
import '../bootstrap.min.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import Footer from './components/Footer'
function App() {

  return (
    <>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/dashboard' element={<Dashboard/>} />
  <Route path='/login' element={<Auth />} />
  <Route path='register' element={<Auth  insideRegister={true} />} />
  <Route path='/projects' element={<Projects/> } />
 
 </Routes >
 <Footer />
    </>
  )
}

export default App
