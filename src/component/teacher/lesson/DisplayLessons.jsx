/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function DisplayLessons({ lessons }) {
  return (
    <div style={{ width: '89%', margin: 'auto', padding: '10px' }}>
      {
              lessons.map((lesson) => (
                <div key={lesson.id} className="classroom">
                  <h3>{ lesson.title }</h3>
                  <span>
                    { `${lesson.contenus.length} contenu(s)`}
                  </span>
                </div>
              ))
        }
    </div>
  );
}
DisplayLessons.propTypes = {
  lessons: PropTypes.array.isRequired,
};

export default DisplayLessons;
