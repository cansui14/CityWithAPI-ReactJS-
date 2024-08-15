import './App.css';
import React, {useContext ,useEffect} from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import CreateCity from './components/CreateCity'
import EditCity from './components/EditCity'
import CityList from './components/CityList'
import CityContext from './context/CityContext';

function App() {
  const {getCities,cities}= useContext(CityContext);

  useEffect(()=>{
 getCities()
  }, [cities])

  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<CityList/>} />
          <Route path="/addCity" element={<CreateCity />} />
          <Route path="/editCity" element={<EditCity />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
