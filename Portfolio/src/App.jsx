import { useState } from 'react'
import './App.css'
import Toggle from './Toggle';
import Home from './Home';
import useLocalStorage from 'use-local-storage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [theme, setTheme] = useLocalStorage(false);

  return (
    <>
    <Home />
    </>
  )
}

export default App
