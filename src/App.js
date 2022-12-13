import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Accomodation from "./pages/Accomodation";
import Committee from "./pages/Committee";
import Advertisement from "./pages/Advertisement";
import AboutUs from "./pages/About-Us";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();
  const [navVisibility, setNavVisibility] = useState(false);

  useEffect(() => {
    if (navVisibility) setNavVisibility(false);
  }, [location]);

  return (
    <>
      <Navbar
        navVisibility={navVisibility}
        setNavVisibility={setNavVisibility}
      />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Help />} path="/submit-abstract" />
        <Route element={<Accomodation />} path="/accomodation" />
        <Route element={<Advertisement />} path="/advertisement" />
        <Route element={<Committee />} path="/committee" />
        <Route element={<AboutUs />} path="/about-us" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
