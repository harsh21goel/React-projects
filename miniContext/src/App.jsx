import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider> 

      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
