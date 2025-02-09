import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './components/Global/NavBar.jsx'
import { ContextProvider } from './components/context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ContextProvider>
  <main className="relative flex flex-col min-h-screen">
    <div className="flex-grow flex-1">
      
      <App />
      
    </div>
  </main>
  </ContextProvider>,
  
 
)