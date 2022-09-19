/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function AddClassRoom({ classrooms, myList, setMyList }) {
  const handleOnchange = (e) => {
    const id = parseInt(e.target.value, 10);
    const index = myList.findIndex((el) => el.id === id);
    if (index < 0) {
      const el = classrooms.filter((lesson) => lesson.id === id);
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
              classrooms.map((classroom) => (
                <div key={classroom.id}>
                  <input onChange={handleOnchange} type="checkbox" value={classroom.id} name={classroom.id} id={`lesson${classroom.id}`} />
                  <label htmlFor={classroom.id}>{classroom.nom}</label>
                </div>
              ))
           // )
        }
    </div>
  );
}

AddClassRoom.propTypes = {
  classrooms: PropTypes.array.isRequired,
  myList: PropTypes.array.isRequired,
  setMyList: PropTypes.func.isRequired,
};
export default AddClassRoom;
