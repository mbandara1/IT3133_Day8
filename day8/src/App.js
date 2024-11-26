import './App.css';
import {BrowserRouter as Router,Routes,Link,NavLink, Route} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
          <nav>
            <ul>
              <li><Link to='/Home'>Home</Link></li>
              <li><Link to='/ContactUs'>ContactUs</Link></li>
              <li><Link to='/AboutUs'>AboutUs</Link></li>
            </ul>
          </nav>
        <Routes>
          <Route path='./Home'element={<Home/>}></Route>
          <Route path='./ContactUs'element={<ContactUs/>}></Route>
          <Route path='./AboutUs'element={<AboutUs/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
