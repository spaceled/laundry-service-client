import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Heading from './Pages/Shared/Heading';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Prices from './Pages/Prices/Prices';

function App() {
  return (
    <div className="mx-auto w-full">
      <Heading></Heading>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/prices" element={<Prices/>}/>
      </Routes>
    </div>
  );
}

export default App;
