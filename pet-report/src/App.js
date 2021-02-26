import React from "react";
import './App.css'
import './index.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavAppBar from './components/NavAppBar'
import DashBoard from './components/DashBoard'
import Login from './components/Login'
import Register from './components/Register'




export default function App () {
  return (
    <div clasName="App-main">
      <NavAppBar />
      <>
        <Route exact path='/dashboard' component={DashBoard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </>
    </div>

  )
}






