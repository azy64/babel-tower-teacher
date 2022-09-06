import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInTeacher } from '../../redux/login/loginSlice';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const d = useSelector((state) => state.login.loading);
  const user = useSelector((state) => state.login.user);
  const [vanish, setVanish] = useState(d);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setVanish(d);
    if (user?.email) {
      navigate('/dashboard');
    } else setError('Email ou mot de passe incorrecte');
  }, [d, user]);
  const connecter = () => {
    dispatch(signInTeacher({ email, password }));
    // dispatch(loginDisplay());
    setEmail('');
    setPassword('');
    // if (user.email) navigate('/dashboard');
  };
  return (vanish === true
    ? (
      <div className="login-block" style={{ display: 'block' }}>
        <h1>Login</h1>
        <form>
          <div>
            <input onChange={((event) => { setEmail(event.target.value); })} type="email" placeholder="saisissez votre email" />
          </div>
          <div>
            <input onChange={(event) => { setPassword(event.target.value); }} type="password" placeholder="saisissez votre mot de passe" />
          </div>
          <h4 className="bad">{error}</h4>
          <button type="button" onClick={connecter}>Se connecter</button>
          <span>
            ou veuillez creer un compte
            <Link to="teacher-register"> ici</Link>
          </span>
        </form>
      </div>
    )
    : <div style={{ display: 'none' }} />);
}
