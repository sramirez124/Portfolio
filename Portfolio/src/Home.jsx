import { useState } from 'react'
import './App.css'
import Toggle from './Toggle';
import SideBar from './SideBar.jsx';
import useLocalStorage from 'use-local-storage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Home() {
    const [theme, setTheme] = useLocalStorage(false);

  return (
    <>
    <div className="App" data-theme={theme ? 'dark' : 'light'}>
      <Toggle
        isChecked={theme}
        handleChange={() => setTheme(!theme)}
       />

      <div className="sideBar">
        <SideBar />
      </div>
    </div>
    </>
  )
}

export default Home;