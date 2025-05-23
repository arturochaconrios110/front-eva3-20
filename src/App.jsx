import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//imoportar componentes generados
import Footer from './components/Footer'
import Header from './components/Header'
import ContactForm from './components/contactform'
import Banner from './components/Banner'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     
      <Banner />
      <br />

      <ContactForm />
     
      <br />
      <Footer />
    </>
  )
}

export default App
