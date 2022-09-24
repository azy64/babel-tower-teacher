/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ContenuForm({
  close, openMyChild, lesson, setLesson,
}) {
  const [libelle, setLibelle] = useState('');
  const [fichier, setFichier] = useState('');
  const [typeContenu, setTypeContenu] = useState('');
  const [lecture, setLecture] = useState('');
  const [error, setError] = useState({});
  const [id, setId] = useState('');
  const ref = useRef();
  const lectureRef = useRef();
  useEffect(() => {
    setTypeContenu(ref.current.value);
    setLecture(lectureRef.current.value);
  });
  const save = () => {
    const lessonOb = { ...lesson };
    const el = {
      libelle, fichier, typeContenu, questions: [], id: nanoid(), lecture,
    };
    // setLastElement(el);
    setId(el.id);
    lessonOb.contents.push(el);
    // console.log('content pendant le save:', lessonOb.contents);
    setLesson(lessonOb);
  };
  const submit = (e) => {
    e.preventDefault();
    if (libelle && fichier && typeContenu) {
      const lastId = lesson.contents[lesson.contents.length - 1]?.id ?? -1;
      if (lastId !== id) { save(); }
      close(false);
    } else {
      setError({
        titre: 'Le titre n\'est pas être vide',
        fichier: 'Veuillez selectionner un fichier!',
        type: 'Veuillez selectionner un type de fihcier!',
      });
    }
  };
  const addContent = (e) => {
    e.preventDefault();
    if (libelle && fichier && typeContenu) {
      const lastId = lesson.contents[lesson.contents.length - 1]?.id ?? -1;
      if (lastId !== id) { save(); }
      openMyChild(true);
    } else {
      setError({
        titre: 'Le titre n\'est pas être vide',
        fichier: 'Veuillez selectionner un fichier!',
        type: 'Veuillez selectionner un type de fihcier!',
      });
    }
  };
  return (
    <div className="window-contenu">
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
        <h1 className="text-center">Formulaire de creation de Contenu</h1>
        <div className="block-input">
          <input name="file-title" type="text" onChange={(e) => setLibelle(e.target.value)} placeholder="Titre de fichier" />
          <span className="bad">{error.titre}</span>
        </div>
        <div className="block-input">
          <input
            type="file"
            onChange={(e) => setFichier(e.target.files[0])}
            placeholder="selection un fihier"
            accept="video/*, audio/*"
            max-file-size="10000000000"
            maxsize="150MB"
          />
          <span className="bad">{error.fichier}</span>
        </div>
        <div className="block-input">
          <select name="type-contenu" onChange={(e) => setTypeContenu(e.target.value)} ref={ref}>
            <option value="audio">Audio</option>
            <option value="video">Video</option>
          </select>
          <span className="bad">{error.type}</span>
        </div>
        <div className="block-input">
          <select name="repetition" onChange={(e) => setLecture(e.target.value)} ref={lectureRef}>
            <option value="repetition 1">Repetition 1</option>
            <option value="repetition 2">Repetition 2</option>
            <option value="repetition 3">Repetition 3</option>
          </select>
          <span className="bad">{error.type}</span>
        </div>
        <div>
          <button onClick={(e) => addContent(e)} className="btn-tunaweza" type="button">Ajouter une question</button>
        </div>
        <div>
          <button className="btn-tunaweza" onClick={submit} type="button">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}

ContenuForm.propTypes = {
  close: PropTypes.func.isRequired,
  openMyChild: PropTypes.func.isRequired,
  setLesson: PropTypes.func.isRequired,
  lesson: PropTypes.object.isRequired,
};

export default ContenuForm;
