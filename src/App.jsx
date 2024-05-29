import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Workk from "./Pages/Workk";
import ContactPage from "./Pages/ContactPages";
import Footer from "./component/Footer";
import Undeploy from "./Pages/Undeploy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work" element={<Workk />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/undeploy" element={<Undeploy />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
