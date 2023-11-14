import Banner from "./Components/Banner"
import Caracteristicas from "./Components/Caracteristicas"
import Footer from "./Components/Footer"
import Mid from "./Components/Mid"
import Navbar from "./Components/Navbar"
import Programas from "./Components/Programas"


function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Banner/>
      <Mid/>
      <Programas/>
      <Caracteristicas/>
      <Footer/>
    </div>
    </>
  )
}

export default App
