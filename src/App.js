  import './App.css';
import Header from './Components';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Search from './Pages/Search';
function App() {
  return (
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/search' element={<Search/>}/>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
