import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landing-page"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
