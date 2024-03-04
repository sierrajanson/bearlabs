import './App.css';
import Contact from './views/Contact';
import Home from './views/Home';
import {Link, useNavigate, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {

  // navigation system
  // header
  // tagline 

  // circles for design
  // pen componenet
  return (
    <div className="App">
      <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>} />

            </Routes>
      </Router>
    </div>
  );
}

export default App;
