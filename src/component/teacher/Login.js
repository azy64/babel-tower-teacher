import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { loginTeacher } from '../../redux/login/loginAction';
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
    if (localStorage.getItem('user')) {
      // dispatch(loginTeacher(JSON.parse(localStorage.getItem('user'))));
      const fake = JSON.parse(localStorage.getItem('user'));
      setEmail(fake.email);
      setPassword(fake.password);
      // navigate('/dashboard');
      // console.log('localStorage', fake, email);
    }
    if (user?.email) {
      localStorage.setItem('user', JSON.stringify(user));
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
        <h1>Identifiez-Vous pour vous connecter</h1>
        <form>
          <div>
            <input autoComplete="malik89@gmail.com allysaidi64@gmail.com" onChange={((event) => { setEmail(event.target.value); })} type="email" placeholder="saisissez votre email" />
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
