import './App.css'
import Banner from './components/Banner'
import FooterSection from './components/FooterSection'
import Home from './components/Home'
import Navbar from './components/NavBar'
import Section from './components/Section'
import { Route,Routes } from 'react-router-dom'
import Services from './components/Services'
import Contact from './components/Contact'
// Route >> single
// Routes >> 10 single routes >>collectively put everything
// direction/ path
// 10 am >> school
// direction + desitination
// path=""      element={} //component
import Body from './components/Body'
import Page404 from './components/Page404'
function App() {

  return (
  <>
  <Navbar/>
   

  <Routes>
    {/* <Route path='/flowerSection' element={<Section/>}/>
    <Route path='/banner' element={<Banner/>}/> */}
      <Route path='/' element={<Body/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/flowerSection' element={<Section/>}/>
      <Route path="*" element={<Page404/>}/>

    <Route/>
  </Routes>

 <FooterSection/> 
 
   </>
  )
}

export default App


// architecture
// component
// Resuablity of component
// Props Passing
// array of objects >> Render in Broswer
// Conditional Rendering
// Style >>
