import React from 'react'
import Navbar from './component/UI/Navbar'
import AddUser from './component/Users/AddUser'
import UserList from './component/Users/UserList'
const App = () => {
  return (
  <>
  <Navbar/>
    <AddUser/>
    <UserList/>
  </>
  )
}

export default App

