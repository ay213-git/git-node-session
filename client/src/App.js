import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './features/auth/Login ';
import Register from './features/auth/Register';
import JewelList from './features/jewel/JewelList';
import Jewel from './features/jewel/Jewel';
import BasketList from './features/basket/BasketList'
function App() {
  return (
    <div className="App">
      
        <Routes>
          
          <Route path='/' element={<Layout/>}>
          {/* <Route path="/" element={<h1>home</h1>}/> */}
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register></Register>}/>
          <Route path='/' element={<JewelList></JewelList>}/>
          <Route path='/getJewels/:id' element={<Jewel ></Jewel>}/>
          <Route path='/basket' element={<BasketList></BasketList>}/>

          </Route>
        </Routes>
      
    </div>
  );
}
export default App;

