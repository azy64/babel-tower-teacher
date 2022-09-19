import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ContenuForm from './ContenuForm';
import DisplayLessons from './DisplayLessons';
import LessonForm from './LessonForm';
import QuestionForm from './QuestionForm';

function Lesson() {
  const [lessonFormVisibility, setLessonFormVisibility] = useState(false);
  const [contentFormVisibility, setContentFormVisibility] = useState(false);
  const [questionFormVisibility, setQuestionFormVisibility] = useState(false);
  const lessonsInDataBase = useSelector((state) => state.lesson.lessons);
  const [lesson, setLesson] = useState({});
  const user = useSelector((state) => state.login.user);
  const navigator = useNavigate();

  useEffect(() => {
    if (Object.entries(user).length === 0) navigator('/');
  }, [user]);
  return (
    <div>
      <h1> Mes Leçons</h1>
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
        <span>Mes leçons</span>
        <div>
          <DisplayLessons lessons={lessonsInDataBase} />
        </div>
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
