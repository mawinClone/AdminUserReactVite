import { useState } from 'react'

import UserProfile from './components/UserProfile'
import SignInSide from './components/SignInSide'
import FormProduct from './components/FormProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FormProduct/>
    </div>
  )
}

export default App
