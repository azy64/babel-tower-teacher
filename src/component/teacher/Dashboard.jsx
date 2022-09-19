import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllClassroomUser, getAllUserLessons } from '../../redux/lessons/lessonsReducer';
import { getStudents } from '../../redux/login/loginSlice';
import babelImage from '../../images/babel2.png';

function Dashboard() {
  const userID = useSelector((state) => state.login.user.id);
  const user = useSelector((state) => state.login.user);
  const formData = new FormData();
  formData.append('userId', userID);
  const dispatch = useDispatch();
  dispatch(getAllUserLessons(formData));
  dispatch(getAllClassroomUser(formData));
  dispatch(getStudents(formData));
  const navigator = useNavigate();

  useEffect(() => {
    if (Object.entries(user).length === 0) navigator('/');
  }, [user]);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center', fontSize: '70px', margin: 0 }}>
          NoBabelTower
        </h1>
        <img
          style={{
            display: 'block', margin: 'auto', width: '25%', paddingTop: '100px', marginTop: '-50px',
          }}
          src={babelImage}
          alt="logo-babel"
        />
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>
          Pour mieux se comprendre
        </h1>
        <h1 style={{ textAlign: 'center', fontSize: '40px' }}>
          A l&lsquo;oral
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
