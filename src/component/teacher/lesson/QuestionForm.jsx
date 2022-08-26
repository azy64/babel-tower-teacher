/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function QuestionForm({ close, lesson, setLesson }) {
  const [question, setQuestion] = useState('');
  const [reponse, setReponse] = useState('');
  const [assertion1, setAssertion1] = useState('');
  const [assertion2, setAssertion2] = useState('');
  const [assertion3, setAssertion3] = useState('');
  const [error, setError] = useState({});
  const submit = (e) => {
    const lessonOb = lesson;
    const quest = {
      question, reponse, assertion1, assertion2, assertion3,
    };
    if (question && reponse && assertion1 && assertion2 && assertion3) {
      const lessonElement = lessonOb;
      lessonElement.contents[lessonElement.contents.length - 1].questions.push(quest);
      setLesson(lessonElement);
      close(false);
    } else {
      setError({
        question: 'La question n\'est peut pas être vide',
        reponse: 'Veuillez donner la reponse',
        assertion1: 'Veuillez la première assertion',
        assertion2: 'Veuillez la deuxième assertion',
        assertion3: 'Veuillez la troisième assertion',
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
        <h1 className="text-center">Creer une question pour le contenu en cours </h1>
        <div className="block-input">
          <input type="text" onChange={(e) => setQuestion(e.target.value)} placeholder="Libelle de la question" />
          <span className="bad">{error.question}</span>
        </div>
        <div className="block-input">
          <input
            type="text"
            onChange={(e) => setReponse(e.target.value)}
            placeholder="La reponse"
          />
          <span className="bad">{error.reponse}</span>
        </div>
        <div className="block-input">
          <input
            type="text"
            onChange={(e) => setAssertion1(e.target.value)}
            placeholder="Donner la première assertion"
          />
          <span className="bad">{error.assertion1}</span>
        </div>
        <div className="block-input">
          <input
            type="text"
            onChange={(e) => setAssertion2(e.target.value)}
            placeholder="Donner la deuxième assertion"
          />
          <span className="bad">{error.assertion2}</span>
        </div>
        <div className="block-input">
          <input
            type="text"
            onChange={(e) => setAssertion3(e.target.value)}
            placeholder="Donner la troisième assertion"
          />
          <span className="bad">{error.assertion3}</span>
        </div>
        <div>
          <button className="btn-tunaweza" onClick={submit} type="button">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}

QuestionForm.propTypes = {
  close: PropTypes.func.isRequired,
  setLesson: PropTypes.func.isRequired,
  lesson: PropTypes.object.isRequired,
};

export default QuestionForm;
