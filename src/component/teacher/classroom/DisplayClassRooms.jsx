/* eslint-disable react/forbid-prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function DisplayClassRooms() {
  const classRooms = useSelector((state) => state.lesson.classRooms);
  const lessons = useSelector((state) => state.lesson.lessons);
  return (
    <div>
      {
            // () => (
              classRooms.map((classroom) => (
                <div key={classroom.id} className="classroom">
                  <h3>{ classroom.nom }</h3>
                  <span>
                    { `${lessons.filter((el) => el?.classRoom?.id === classroom.id).length} leçon(s)`}
                  </span>
                </div>
              ))
           // )
        }
    </div>
  );
}

/* DisplayClassRooms.propTypes = {
  classRooms: PropTypes.array.isRequired,
};
*/
export default DisplayClassRooms;
