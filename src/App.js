import { Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
