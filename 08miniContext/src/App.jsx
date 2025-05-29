import UserContextProvider from './Context/UserContextProvider'
import React from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
 <UserContextProvider>
 <Login/>
 <Profile/>
 </UserContextProvider>

//  or we can use like this  if we have not use the separate file 
// {/* <UserContext.Provider value={}></UserContext.Provider> */}
  
)
}

export default App
