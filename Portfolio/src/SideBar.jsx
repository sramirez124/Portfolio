import "./App.css"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function SideBar() {
    // return (
    //     <div className="sideBarContent">
    //         <div className="title">
    //             {/* Add link for Home tab after backend is done */}
    //             <a href="/"><h1>Steven Ramirez</h1></a>
    //             <p>MERN Full Stack Developer | Game Designer</p>
    //         </div>
    
    //         <div className="links">
    //             <div className="github">
    //                 <a href="https://github.com/sramirez124"><h2>GitHub</h2></a>
    //             </div>
    //             <div className="linkedin">
    //                 <a href="https://www.linkedin.com/in/steven-m-ramirez/"><h2>LinkedIn</h2></a>
    //             </div>
    //             <BrowserRouter>
    //             <div className="projects">
    //                 <Routes>
    //                     <Route path ="Projects" element = {<Projects />} />
    //                 </Routes>
                    
    //             </div>
    //             <div className="aboutMe">
    //                <Routes>
    //                     <Route path ="About Me" element = {<AboutMe />} />
    //                 </Routes>
    //             </div>
    //             </BrowserRouter>
    //         </div>
    //     </div>
    // )
}

export default SideBar