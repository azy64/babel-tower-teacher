// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './component/teacher/Login';
import Register from './component/teacher/Register';
import Dashboard from './component/teacher/Dashboard';
import Lesson from './component/teacher/lesson/Lesson';
import Contenu from './component/teacher/Contenu';
import ClassRoom from './component/teacher/classroom/ClassRoom';
import Student from './component/teacher/student/Student';
import Menu from './component/teacher/Menu';

function App() {
  const user = useSelector((state) => state.login.user);
  const tab = [
    { name: 'Classes', url: '/classroom', id: 3 },
    { name: 'Leçons', url: '/lesson', id: 1 },
    { name: 'Contenu-Leçons', url: '/contenu', id: 2 },
    { name: 'Apprenants', url: '/students', id: 4 },
  ];

  return (
    <div>
      {
        (Object.entries(user).length > 0) ? <Menu menus={tab} /> : <div />
      }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="teacher-register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="lesson" element={<Lesson />} />
        <Route path="contenu" element={<Contenu />} />
        <Route path="classroom" element={<ClassRoom />} />
        <Route path="students" element={<Student />} />
      </Routes>
    </div>

  );
}

export default App;
