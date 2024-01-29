

import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Mentor from './Components/Mentor/Mentor'
import Navbar from './Components/Navbar/Navbar'
import Payment from './Components/Payment/Payment'
import Service from './Components/Service/Service'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {
  

  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Service/>
    <Mentor/>
    <Payment/>
    <Testimonial/>
    <Footer/>

    </div>
  )
}

export default App
