import { useState } from 'react'
import './App.css'
import Toggle from './Toggle';
import SideBar from './SideBar.jsx';
import Projects from './Projects.jsx';
import useLocalStorage from 'use-local-storage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Home() {
    const [theme, setTheme] = useLocalStorage(false);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Project />} />
          <Route path="aboutMe" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <div className="App" data-theme={theme ? 'dark' : 'light'}>
      <Toggle
        isChecked={theme}
        handleChange={() => setTheme(!theme)}
       />

      
      <div className="content-container">
        <div className="sideBar">
          <SideBar />
        </div>

        <div className="body">
          <div className='cards'> 
            <div className="card">
              <h1>Card 1</h1>
            </div>
            <div className="card">
              <h1>Card 2</h1>
            </div>
            <div className="card">
              <h1>Card 3</h1>
            </div>
            <div className="card">
              <h1>Card 4</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;