import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Volunteers from '../src/components/Volunteers/Volunteers';
import About from '../src/components/About/About';
import Header from '../src/components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/volunteers' element={<Volunteers></Volunteers>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
