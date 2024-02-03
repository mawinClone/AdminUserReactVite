import { useState } from 'react'

import UserProfile from './components/UserProfile'
import SignInSide from './components/SignInSide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <p>hello vite</p>
      <UserProfile name = {"Keroro"} /> */}
      <SignInSide/>
    </div>
  )
}

export default App
