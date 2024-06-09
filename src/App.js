import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Contact from './Components/contact';
import About from './Components/About';
import Ideas from './Components/Ideas';
import Profile from './Components/Profile';
import User from './Components/users';
import 'react-toastify/dist/ReactToastify.css';
import IdeasLog from './Components/ideaslog';
import IdeaDetailPage from './Components/idea_ela';
import FrontPage from './Components/Frontpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import AddIdea from './Components/AddIdea';

function App() {
  return (
    <Router>
      <div className='container my-3'>
        <Routes>
        <Route path="/" element={<FrontPage />}/>
        
        <Route path="/home" element={<FrontPage />}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/MyProfile" element={<Dashboard />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="/User" element={<Dashboard />}>
            <Route index element={<User />} />
            
          </Route>
          <Route  path="/View-ideas" element={<Ideas />} />
          <Route  path="/see" element={<IdeasLog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addIdea" element={<AddIdea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
