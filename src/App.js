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

function App() {
  return (
    <div className="mx-auto w-full">
      <Heading></Heading>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
