import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';
import Company from './pages/Company';
import CompanyLogin from './pages/CompanyLogin';
import Student from './pages/Student';
import StudentLogin from './pages/StudentLogin';

import CompanyState from './context/company/CompanyState';
import StudentState from './context/student/StudentState';

function App() {

  return (
    <>
      <StudentState>
        <CompanyState>
          <div>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/company' element={<Company />} />
              <Route exact path='/student' element={<Student />} />
              <Route exact path='/company/login' element={<CompanyLogin />} />
              <Route exact path='/student/login' element={<StudentLogin />} />
            </Routes>
          </div>
        </CompanyState>
      </StudentState>
    </>
  );
}

export default App;
