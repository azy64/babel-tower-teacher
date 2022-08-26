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
  const [error, setError] = useState({});
  const [id, setId] = useState('');
  const ref = useRef();
  useEffect(() => {
    setTypeContenu(ref.current.value);
  });
  const save = () => {
    const lessonOb = { ...lesson };
    const el = {
      libelle, fichier, typeContenu, questions: [], id: nanoid(),
    };
    // setLastElement(el);
    setId(el.id);
    lessonOb.contents.push(el);
    setLesson(lessonOb);
  };
  const submit = (e) => {
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
      e.preventDefault();
    }
  };
  const addContent = (e) => {
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
      e.preventDefault();
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
          <input type="text" onChange={(e) => setLibelle(e.target.value)} placeholder="Titre de fichier" />
          <span className="bad">{error.titre}</span>
        </div>
        <div className="block-input">
          <input
            type="file"
            onChange={(e) => setFichier(e.target.files[0])}
            placeholder="selection un fihier"
          />
          <span className="bad">{error.fichier}</span>
        </div>
        <div className="block-input">
          <select onChange={(e) => setTypeContenu(e.target.value)} ref={ref}>
            <option value="audio">Audio</option>
            <option value="video">Video</option>
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
