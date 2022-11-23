import "./App.css";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Footer from "./pages/FooterPage";
import Home from "./pages/HomePage";
// import Life from "./pages/LifePage";
import Navbar from "./pages/NavbarPage";
import SocialIcons from "./pages/SocialIcons";
import Vlog from "./pages/VlogPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SocialIcons />
        <Routes>
          <Route path="/" exact element={[<Home />, <About />]} />
          <Route path="/vlog" exact element={<Vlog />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
