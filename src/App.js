import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Weather from './Components/Weather';
import Calender from './Components/Calender';
import Notes from './Components/Notes';
import Todolist from './Components/Todolist';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Nav' element={<Nav/>}/>
        <Route path='/Weather' element={<Weather/>}/>
        <Route path='/Calender' element={<Calender/>}/>
        <Route path='/Todolist' element={<Todolist/>}/>
        <Route path='/Notes' element={<Notes/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>


      {/* <Home/> */}
      {/* <Nav /> */}
      {/* <Weather/> */}
      {/* <Calender/> */}
      {/* <Notes/> */}
      {/* <Todolist/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
