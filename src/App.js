import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home, { Container } from "./components/Home";
import Navbar from "./components/Navbar";
//import Navbar from "./components/Navbar";
// import '../src/index.css'
import GlobalStyles from "./Global.styles";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/service" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
    // <>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<Navbar/>}/>
    //       <Route path='/home' element={<Home/>}/>
    //     </Routes>
    //   </BrowserRouter>
    // </>
  );
}

export default App;
