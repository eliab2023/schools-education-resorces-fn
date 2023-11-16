import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // Import the Login component
import Register from './pages/Register'; // Import the Register component
import Home from './pages/Home'; // Import your Home component
import ExamList from './components/examList';
import Exam from './components/exam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
        <Route path="/register" element={<Register />} /> {/* Add the Register route */}
        <Route path="/exams" element={<ExamList />} /> {/* Add the Register route */}
        <Route path="/exam/:id" element={<Exam />} /> {/* Add the Register route */}

      </Routes>
    </Router>
  );
}

export default App;
