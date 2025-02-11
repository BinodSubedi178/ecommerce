import './App.css'
import { Navbar, Promotion, Footer } from './components/AllComponents'
import { Router } from './Routes/Router'

const App = () => {

  return (
    <div className='app'>
      <Promotion />
      <Navbar />
      <Router />
      <Footer />
    </div>

  )
}

export default App
