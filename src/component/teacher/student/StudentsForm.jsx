import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AddClassRoom from './AddClassRoom';
import { registerStudent } from '../../../redux/login/loginSlice';

function StudentsForm({ close }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [myList, setMyList] = useState([]);
  const dispatch = useDispatch();
  const classrooms = useSelector((state) => state.lesson.classRooms);
  const userId = useSelector((state) => state.login.user.id);
  /**
   *
   * @param {e} is the event to use the preventDefault
   */
  const submit = (e) => {
    e.preventDefault();
    if (nom && prenom && email && password && myList.length > 0) {
      const student = {
        nom, prenom, email, password, userId, classrooms: myList,
      };
      const formData = new FormData();
      formData.append('student', JSON.stringify(student));
      dispatch(registerStudent(formData));
      close(false);
    } else {
      setError({
        nom: 'le nom d\'étudiant n\'est pas etre vide',
        prenom: 'le prenom d\'étudiant n\'est pas etre vide',
        email: 'le mail de l\'étudiant n\'est pas etre vide',
        password: 'Mettez un mot de passe!',
        classroom: 'Selectioner au moins une classe',
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
        <h1 className="text-center">Formulaire de creation d&apos;un Etudiant</h1>
        <div className="block-input">
          <input type="text" onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" />
          <span className="bad">{error.nom}</span>
        </div>
        <div className="block-input">
          <input type="text" onChange={(e) => setPrenom(e.target.value)} placeholder="Votre prenom" />
          <span className="bad">{error.prenom}</span>
        </div>
        <div className="block-input">
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Votre Email" />
          <span className="bad">{error.email}</span>
        </div>
        <div className="block-input">
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Votre mot de passe" />
          <span className="bad">{error.password}</span>
        </div>
        <div className="block-input">
          <h3>Selection les leçons pour la classe courante</h3>
          {
            classrooms.length === 0 ? 'Commencer par creer des lessons puis des classes' : ' '
          }
          <div className="list">
            <span className="bad">{error.classroom}</span>
            <AddClassRoom setMyList={setMyList} classrooms={classrooms} myList={myList} />
          </div>
        </div>
        <div>
          <button className="btn-tunaweza" onClick={submit} type="button">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}
StudentsForm.propTypes = {
  close: PropTypes.func.isRequired,
};

export default StudentsForm;
