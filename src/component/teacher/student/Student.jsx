import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector /* , useDispatch */ } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getStudents } from '../../../redux/login/loginSlice';
import StudentsForm from './StudentsForm';

function Student() {
  const dispatch = useDispatch();
  // dispatch(getStudents(formData))
  const students = useSelector((state) => state.login.students) ?? [];
  const members = useSelector((state) => state.login.members) ?? [];
  const user = useSelector((state) => state.login.user);
  const [classRoomFormVisibility, setClassRoomFormVisibility] = useState(false);
  const navigator = useNavigate();
  const formData = new FormData();
  // const dispatch = useDispatch();
  formData.append('userId', user.id);
  dispatch(getStudents(formData));
  useEffect(() => {
    if (Object.entries(user).length === 0) navigator('/');
  }, []);
  return (
    <div>
      <h1>Mes apprenants</h1>
      <div>
        <div>
          <button
            className="btn-tunaweza"
            onClick={() => setClassRoomFormVisibility(!classRoomFormVisibility)}
            type="button"
          >
            Ajouter un nouvel apprenant
          </button>
        </div>
        <span>Mes apprenants</span>
        <div>
          {
            students.map((student) => (
              <div key={student.id} className="classroom" style={{ padding: '5px' }}>
                <h3>
                  { student.nom }
                  {' '}
                  { student.prenom }
                </h3>
                <span
                  style={{
                    textAlign: 'start', display: 'inline-block', width: '60%', fontSize: '16px',
                  }}
                >
                  { student.email}
                </span>
                <span style={{
                  textAlign: 'end', display: 'inline-block', width: '40%', fontSize: '16px',
                }}
                >
                  {' '}
                  { (members.filter((member) => member.student.id === student.id))
                    .map((el) => el.classroom.nom)}
                </span>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        {classRoomFormVisibility === true
          ? (
            <StudentsForm
              close={setClassRoomFormVisibility}
            />
          ) : ''}
      </div>
    </div>
  );
}

export default Student;
