import React from "react";
import './App.css'
import './index.css'
import { Route } from 'react-router-dom'
import NavAppBar from './components/NavAppBar'
import DashBoard from './components/DashBoard'
import About from './components/About'




export default function App () {
  return (
    <div clasName="App-main">
      <NavAppBar />
      <>
        <Route exact path='/create-report' component={DashBoard} />
        <Route exact path='/about' component={About} />
      </>
    </div>

  )
}






