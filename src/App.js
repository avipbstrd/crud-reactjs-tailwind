import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/navbar';
import User from './Pages/User/User';
import Adduser from './Pages/User/Adduser';
import Edit from './Pages/User/Edit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/edituser/:id' element={<Edit />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
