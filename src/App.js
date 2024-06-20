
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { About } from './components/about';
import { Navbar } from './components/navbar';
import { Services } from './components/services';




const Home=()=>{
  return(<div><h1>Home Page</h1></div>)
}
function App() {

  
  return (
    <BrowserRouter>
     <Navbar/>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
