import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import CharacterInfo from './pages/CharacterInfo';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/character/:characterId" element={<CharacterInfo />} />
      </Routes>
    </>
  )
}

export default App;