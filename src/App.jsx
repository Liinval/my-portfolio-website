import {BrowserRouter,Routes,Route} from "react-router-dom"
import Hero from "./componets/hero/Hero"
import Experience from "./componets/experience/Experience"
import NotFound from "./componets/notfound/NotFound"
import Skills from "./componets/skills/Skills"
import Projects from "./componets/projects/Projects"
import Navbar from "./componets/navbar/Navbar"
import Certifications from "./componets/certifications/Certifications"
function App() {
  return (
    
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Hero />}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/experience" element={<Experience />}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/certifications"element={<Certifications/>}/>
    <Route path="#" element={<NotFound/>}/>
   </Routes>
   
   </BrowserRouter>


      
  )
}

export default App
