import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
//import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>  
      </BrowserRouter>
    </>
  );
}

export default App;
