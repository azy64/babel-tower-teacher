// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/teacher/Login';
import Register from './component/teacher/Register';
import Dashboard from './component/teacher/Dashboard';
import Lesson from './component/teacher/lesson/Lesson';
import Contenu from './component/teacher/Contenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="teacher-register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="lesson" element={<Lesson />} />
        <Route path="contenu" element={<Contenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
