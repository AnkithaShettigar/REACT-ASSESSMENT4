// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import ContactUs from './components/ContactUs';



function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/contactus" element = {<ContactUs/>}/>
      <Route path ='/students' element = {<Students/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
