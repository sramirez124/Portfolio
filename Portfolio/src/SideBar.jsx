import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function SideBar() {
    return (
        <div className="sideBarContent">
            <div className="title">
                {/* Add link for Home tab after backend is done */}
                <a href="/"><h1>Steven Ramirez</h1></a>
                <p>MERN Full Stack Developer | Game Designer</p>
            </div>
    
            <div className="links">
                <div className="github">
                    <a href="https://github.com/sramirez124"><h2>GitHub</h2></a>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/steven-m-ramirez/"><h2>LinkedIn</h2></a>
                </div>
                <div className="projects">
                    <h2>Projects</h2>
                </div>
                <div className="aboutMe">
                    <h2>About Me</h2>
                </div>
            </div>

        {/* Used for later when adding backend */}
        <BrowserRouter>
        {/* <Routes>
          <Route path ="/Projects" element = {<Projects />} />
          <Route path ="/AboutMe" element = {<AboutMe />} />
        </Routes> */}
      </BrowserRouter>
        </div>
    )
}

export default SideBar