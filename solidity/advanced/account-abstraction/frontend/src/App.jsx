import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import User from "./components/User"
import { useEffect, useState } from "react"
import { isWalletConnected } from "./components/Blockchains"
import HomePage from "./components/Home"

function App() {

  

const  background = 'https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80'

const [loaded, setLoaded] = useState(false)

useEffect(() => {
  const loadData = async () => {
    console.log('Blockchain loaded');
    await isWalletConnected();
    setLoaded(true);
  };
  loadData();
}, []);
  return (
  
    <div className='min-h-screen bg-slate-500'>
        <div
          className=" p-6 md:px-40 "
        >
          <HomePage />
    </div>
  </div>
  )
}

export default App
