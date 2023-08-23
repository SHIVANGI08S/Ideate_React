import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Contact from './Components/contact';
import About from './Components/About';
import Ideas from './Components/Ideas';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<style>@import url('https://fonts.googleapis.com/css2?family=Borel&display=swap');</style>
function App() {
  return (
    <Router>
      <div className='container my-3'>
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path='/Dashboard' element={<Dashboard />}>
                  <Route path="My_Profile" element={<Profile></Profile>} />
                  <Route path="Contact" element={<Contact/>} />
          </Route>
          <Route path="About_us" element={<About/>} />
          <Route path="View_ideas" element={<Ideas/>} />
          <Route path="Login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
