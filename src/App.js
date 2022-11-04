  import './App.css';
// import Header from './Components/Header/Header1';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import CoinPages from './Pages/CoinPages';
function App() {
  return (
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/coin' element={<CoinPages/>}/>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
