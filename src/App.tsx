import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import {NavBar} from "./components/NavBar"


const App = () => {

  return <>
  <Container>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Store" element={<Store/>} />
      <Route path="/About" element={<About/>}/>
    </Routes>
    </Container>
    </>
}

export default App
