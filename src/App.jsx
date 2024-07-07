
import React from 'react'
import Home from './components/Home/Home'
import NavBar from './components/Global/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Create Account/SignUp.jsx'
import SignIn from './components/Create Account/SignIn';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    
    <>
    <Router>
    <NavBar/>
    
      
      <Routes>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        <Route exact path='/' element={ <Home/>}/>
        <Route exact path='/SignIn' element={<SignIn/>}/>
      </Routes>
      <ToastContainer/>

      </Router>
    </>
    
  )
}

export default App