import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/intro/intro";
import About from "./components/AboutSection/about";
import Works from "./components/MyWorks/works";
import Contacts from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Works/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
