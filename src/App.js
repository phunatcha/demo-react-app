import logo from './logo.svg';
import './App.css';
import "./input.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from './pages/Landingpage';
import DetailsPage from './pages/DetailsPage';
import Navbar from './components/NavBar';
function App() {
  return(
    <div className='bg-gradient-to-b from-[#093B1E] to-[#69dc99] h-screen'>
    <Navbar/>
    <Routes>
      <Route path="/"element={<Landingpage/>}></Route>
      <Route path="/details"element={<DetailsPage/>}></Route>
    </Routes>
    </div>
    
  );
}

export default App;
