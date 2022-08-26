import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { regeisterTeacher } from '../../redux/login/loginSlice';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [langue, setLangue] = useState('');
  const user = useSelector((state) => state.login.user.result);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {

  });
  const submit = () => {
    dispatch(regeisterTeacher({
      email, password, prenom, nom, langue,
    }));
    if (user !== {} || user !== null) {
      navigate('/dashboard');
    }
  };
  return (
    <div className="login-block">
      <h1>Création du compte enseignant</h1>
      <form>
        <div>
          <input type="text" placeholder="Votre nom" onChange={(e) => setNom(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Votre prenom" onChange={(e) => setPrenom(e.target.value)} />
        </div>
        <div>
          <input type="email" placeholder="Votre email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Votre mot de passe" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <select onChange={(e) => { setLangue(e.target.value); }}>
            <option value="Français">Français</option>
            <option value="Anglais">Anglais</option>
          </select>
        </div>
        <button onClick={submit} type="button">Creer</button>
      </form>
    </div>
  );
}
