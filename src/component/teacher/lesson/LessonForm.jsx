/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { saveLesson } from '../../../redux/lessons/lessonsReducer';

function LessonForm({
  close, openMyChild, lesson, setLesson,
}) {
  const [title, setTitle] = useState('');
  const [consigneOne, setConsigneOne] = useState('');
  const [consigneTwo, setConsigneTwo] = useState('');
  const [error, setError] = useState('');
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const submit = (e) => {
    if (title && consigneOne && consigneTwo) {
      const formData = new FormData();
      if (lesson.contents !== undefined && lesson.contents.length > 0) {
        formData.append('lesson', JSON.stringify(lesson));
        lesson.contents.map((content) => {
          const { fichier } = content;
          formData.append(`fichier_${content.id}`, fichier, `${content.id}.${fichier.name.split('.')[1]}`);
          return content;
        });

        setLesson(formData);
        console.log('voici la lesson avant to send:', formData.get('fichier'));
        dispatch(saveLesson(formData));
      } else {
        alert('ajouter au moins un contenu');
      }
    }
    e.preventDefault();
  };

  const createLesson = (e) => {
    if (title && consigneOne && consigneTwo) {
      if (lesson.contents === undefined) {
        setLesson({
          title, consigneOne, consigneTwo, contents: [], id: nanoid(), userId: user.id,
        });
      }
      openMyChild(true);
    } else {
      setError({
        title: 'le titre est vide',
        consigne1: 'cette consigne ne doit pas etre vide',
        consigne2: 'cette consigne ne doit pas etre vide',
      });
      e.preventDefault();
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
        <h1 className="text-center">Formulaire de creation d&apos;une leçon</h1>
        <div className="block-input">
          <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Titre de la leçon" />
          <span className="bad">{error.title}</span>
        </div>
        <div className="block-input">
          <input
            type="text"
            onChange={(e) => setConsigneOne(e.target.value)}
            placeholder="Entrer la première consigne"
          />
          <span className="bad">{error.consigne1}</span>
        </div>
        <div className="block-input">
          <input
            type="text"
            onChange={(e) => setConsigneTwo(e.target.value)}
            placeholder="Entrer la deuxième consigne"
          />
          <span className="bad">{error.consigne2}</span>
        </div>
        <div>
          <button onClick={(e) => createLesson(e)} className="btn-tunaweza" type="button">Ajouter contenu</button>
        </div>
        <div>
          <button className="btn-tunaweza" onClick={submit} type="button">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}

LessonForm.propTypes = {
  close: PropTypes.func.isRequired,
  openMyChild: PropTypes.func.isRequired,
  setLesson: PropTypes.func.isRequired,
  lesson: PropTypes.object.isRequired,
};

export default LessonForm;
