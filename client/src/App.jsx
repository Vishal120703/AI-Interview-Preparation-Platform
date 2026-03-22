import MainLayout from './layouts/MainLayout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './components/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<MainLayout/>}/>
        <Route path="/signup" element= {<Signup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App