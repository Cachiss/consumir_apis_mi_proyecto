import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Message from "./components/Message/Message";
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App