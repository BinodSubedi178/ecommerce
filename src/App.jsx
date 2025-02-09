import './App.css'
import { Navbar, Promotion, Footer } from './components/AllComponents'
import { Router } from './Routes/Router'

const App = () => {

  return (
    <>
    <Promotion/>
    <Navbar />
    <Router/>
    <Footer />
    </>
    
  )
}

export default App
