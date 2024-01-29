import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputComponent from './components/InputComponent'
import countryData from '/resources/countryData.json';

function App() {

  return (
    <>
     <InputComponent Data={countryData} />
    </>
  )
}

export default App
