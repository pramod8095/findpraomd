import Home from './Assests/Home/Home'
import About from './Assests/About/About'
import Main from './Assests/FirstPage/Main'
import Skills from './Assests/Skills/Skills'
import Experience from './Assests/Experience/Experience'
import Facts from './Assests/Facts/Facts'
import Education from './Assests/Education/Education'
import './App.css';
import Footer from './Assests/Footer/Footer'
function App() {
  return (
    <div>      
    <div className="App">      
        <Main/>
        <About/>
        <Skills/>
        <Experience />
        <Facts/>
        <Education />
    </div>
    <Footer />
    </div>

  );
}

export default App;
