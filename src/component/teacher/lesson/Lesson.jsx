import React, { useState } from 'react';
import ContenuForm from './ContenuForm';
import LessonForm from './LessonForm';
import QuestionForm from './QuestionForm';

function Lesson() {
  const [lessonFormVisibility, setLessonFormVisibility] = useState(false);
  const [contentFormVisibility, setContentFormVisibility] = useState(false);
  const [questionFormVisibility, setQuestionFormVisibility] = useState(false);
  const [lesson, setLesson] = useState({});
  return (
    <div>
      <h1> Lesson</h1>
      <div>
        <div>
          <button
            className="btn-tunaweza"
            onClick={() => setLessonFormVisibility(!lessonFormVisibility)}
            type="button"
          >
            Ajouter une nouvelle leçon
          </button>
        </div>
        <span>Affichage des leçons ici</span>
      </div>
      {lessonFormVisibility === true
        ? (
          <LessonForm
            close={setLessonFormVisibility}
            openMyChild={setContentFormVisibility}
            lesson={lesson}
            setLesson={setLesson}
          />
        ) : ''}
      {contentFormVisibility === true
        ? (
          <ContenuForm
            close={setContentFormVisibility}
            openMyChild={setQuestionFormVisibility}
            lesson={lesson}
            setLesson={setLesson}
          />
        ) : ''}
      {questionFormVisibility === true
        ? (
          <QuestionForm
            close={setQuestionFormVisibility}
            lesson={lesson}
            setLesson={setLesson}
          />
        ) : ''}
    </div>
  );
}

export default Lesson;
