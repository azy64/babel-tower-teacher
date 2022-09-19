import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CLassRoomForm from './CLassRoomForm';
import DisplayClassRooms from './DisplayClassRooms';

function ClassRoom() {
  const [classRoomFormVisibility, setClassRoomFormVisibility] = useState(false);
  const classrooms = useSelector((state) => state.lesson.classRooms);
  const user = useSelector((state) => state.login.user);
  const navigator = useNavigate();
  useEffect(() => {
    if (Object.entries(user).length === 0) navigator('/');
  }, [user]);
  return (
    <div>
      <h1> Mes classes de langues</h1>
      <div>
        <div>
          <button
            className="btn-tunaweza"
            onClick={() => setClassRoomFormVisibility(!classRoomFormVisibility)}
            type="button"
          >
            Ajouter une nouvelle classe
          </button>
        </div>
        <span>Mes classes</span>
        <div>
          <DisplayClassRooms classRooms={classrooms} />
        </div>
      </div>
      <div>
        {classRoomFormVisibility === true
          ? (
            <CLassRoomForm
              close={setClassRoomFormVisibility}
            />
          ) : ''}
      </div>
    </div>
  );
}

export default ClassRoom;
