/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function AddLessons({ lessons, setMyList, myList }) {
  const handleOnchange = (e) => {
    const id = e.target.value;
    const list = [...myList, lessons.filter((lesson) => lesson.id === id)];
    setMyList(list);
  };
  return (
    <div>
      {
            () => (
              lessons.map((lesson) => (
                <div key={lesson.id}>
                  <input onChange={handleOnchange} type="checkbox" value={lesson.id} name={lesson.id} id={`lesson${lesson.id}`} />
                  <label htmlFor={lesson.id}>{lesson.title}</label>
                </div>
              ))
            )
        }
    </div>
  );
}

AddLessons.propTypes = {
  lessons: PropTypes.array.isRequired,
  myList: PropTypes.array.isRequired,
  setMyList: PropTypes.func.isRequired,
};
export default AddLessons;
