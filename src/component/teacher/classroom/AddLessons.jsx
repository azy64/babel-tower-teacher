/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function AddLessons({ lessons, setMyList, myList }) {
  const handleOnchange = (e) => {
    const id = parseInt(e.target.value, 10);
    const index = myList.findIndex((el) => el.id === id);
    if (index < 0) {
      const el = lessons.filter((lesson) => lesson.id === id);
      const list = [...myList, el[0]];
      setMyList(list);
      // console.log('ajout d\'un element de la liste de leçons:', list);
    } else {
      const newList = myList.filter((lesson) => lesson.id !== id);
      setMyList(newList);
      // console.log('supression d\'un element de la liste de leçons:', newList);
    }
  };
  return (
    <div>
      {
            // () => (
              lessons.map((lesson) => (
                <div key={lesson.id}>
                  <input onChange={handleOnchange} type="checkbox" value={lesson.id} name={lesson.id} id={`lesson${lesson.id}`} />
                  <label htmlFor={lesson.id}>{lesson.title}</label>
                </div>
              ))
           // )
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
