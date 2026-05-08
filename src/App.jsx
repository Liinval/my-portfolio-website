import {BrowserRouter,Routes,Route} from "react-router-dom"
import Hero from "./componets/hero/Hero"
import Experience from "./componets/experience/Experience"
import NotFound from "./componets/notfound/NotFound"
import Skills from "./componets/skills/Skills"
import Projects from "./componets/projects/Projects"
import Navbar from "./componets/navbar/Navbar"
import Certifications from "./componets/certifications/Certifications"
import Footer from "./componets/footer/Footer"
function App() {
  return (
    
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Hero />}/>
    <Route path="/Skills" element={<Skills/>}/>
    <Route path="/Experience" element={<Experience />}/>
    <Route path="/Projects" element={<Projects/>}/>
    <Route path="/Certifications"element={<Certifications/>}/>
    <Route path="#" element={<NotFound/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>


      
  )
}

export default App
