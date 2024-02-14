import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Locations from './pages/Locations';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </>
  )
}

export default App;