import "./App.css";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Home from "./pages/HomePage";
import Life from "./pages/LifePage";
import Navbar from "./pages/NavbarPage";
import Vlog from "./pages/VlogPage";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Vlog />
      <Life />
      <Contact />
    </>
  );
}

export default App;
