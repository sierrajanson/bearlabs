import './App.css';
import Home_kn from './views/Home_kn';
import Home_en from './views/Home_en';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home_en/>}/>
                <Route path='/kn' element={<Home_kn/>}/>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
