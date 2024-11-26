import './App.css';
import {BrowserRouter,Router,Routes,Link,NavLink, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {AboutUs} from "./components/AboutUs";
import {ContactUs} from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
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
