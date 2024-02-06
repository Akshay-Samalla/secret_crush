import { useState ,useEffect } from 'react'
import './App.css'
import Welcome from './components/welcome'
import Appview from './components/appview'
import Video from './components/video'
function App() {
  const [welcomecomplete, setWelcomecoplete] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomecoplete(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])


  return (
    <>
    {welcomecomplete && <Video/>}
    {!welcomecomplete && <Welcome/>}
    
    {welcomecomplete && <Appview/>}
    
    </>
  )
}

export default App
