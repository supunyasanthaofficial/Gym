import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Packages from "./pages/Packages";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
