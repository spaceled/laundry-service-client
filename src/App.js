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

function App() {
  return (
    <div className="mx-auto w-full">
      <Heading></Heading>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
