import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CLassRoomForm from './CLassRoomForm';
import DisplayClassRooms from './DisplayClassRooms';

function ClassRoom() {
  const [classRoomFormVisibility, setClassRoomFormVisibility] = useState(false);
  const classrooms = useSelector((state) => state.classRooms);
  return (
    <div>
      <h1> Lesson</h1>
      <div>
        <div>
          <button
            className="btn-tunaweza"
            onClick={() => setClassRoomFormVisibility(!classRoomFormVisibility)}
            type="button"
          >
            Ajouter une nouvelle classroom
          </button>
        </div>
        <span>Affichage des classrooms ici</span>
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
