/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function DisplayClassRooms({ classRooms }) {
  return (
    <div>
      {
            () => (
              classRooms.map((classroom) => (
                <div key={classroom.id} className="classroom">
                  <h3>{ classroom.nom }</h3>
                  <span>
                    { `${classroom.lessons.length} leçons`}
                  </span>
                </div>
              ))
            )
        }
    </div>
  );
}

DisplayClassRooms.propTypes = {
  classRooms: PropTypes.array.isRequired,
};
export default DisplayClassRooms;
