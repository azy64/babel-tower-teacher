import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AddLessons from './AddLessons';
import { createClassRoom } from '../../../redux/lessons/lessonsReducer';

function CLassRoomForm({
  close,
}) {
  const [nom, setNom] = useState('');
  const user = useSelector((state) => state.login.user);
  const lessons = useSelector((state) => state.lessons);
  const [error, setError] = useState('');
  const [myList, setMyList] = useState([]);
  const dispatch = useDispatch();
  /**
   *
   * @param {e} is the event to use the preventDefault
   */
  const submit = (e) => {
    e.preventDefault();
    if (nom) {
      const classroom = { nom, lessons, userId: user.id };
      const formData = new FormData();
      formData.append('classroom', JSON.stringify(classroom));
      dispatch(createClassRoom(formData));
      close(close);
    } else {
      setError({
        nom: 'le libelle de la leçon n\'est pas etre vide',
      });
    }
  };
  return (
    <div className="window-lesson">
      <form>
        <div className="text-right">
          <span
            role="button"
            onClick={() => close(false)}
            onKeyUp={() => close(false)}
            className="close text-center"
            tabIndex="0"
          >
            X
          </span>
        </div>
        <h1 className="text-center">Formulaire de creation d&apos;une classroom</h1>
        <div className="block-input">
          <input type="text" onChange={(e) => setNom(e.target.value)} placeholder="Libellé de la leçon" />
          <span className="bad">{error.nom}</span>
        </div>
        <div className="block-input">
          <h3>Selection les leçons pour la classe courante</h3>
          <div className="list">
            <AddLessons setMyList={setMyList} lessons={lessons} myList={myList} />
          </div>
        </div>
        <div>
          <button className="btn-tunaweza" onClick={submit} type="button">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}

CLassRoomForm.propTypes = {
  close: PropTypes.func.isRequired,
};
export default CLassRoomForm;
