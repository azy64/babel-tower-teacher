/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

const DisplayClassRooms = ({ classRooms, lessons }) => (
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
DisplayClassRooms.propTypes = {
  classRooms: PropTypes.array.isRequired,
  lessons: PropTypes.array.isRequired,
};

export default DisplayClassRooms;
