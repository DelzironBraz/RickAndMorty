import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App;