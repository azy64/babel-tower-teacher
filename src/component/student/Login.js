import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStudent } from '../../redux/login/loginSlice';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const d = useSelector((state) => state.login.loading);
  const [vanish, setVanish] = useState();

  useEffect(() => {
    setVanish(d);
  }, [d]);
  const connecter = () => {
    dispatch(signInStudent({ email, password }));
    // dispatch(loginDisplay());
    setEmail('');
    setPassword('');
  };
  return (vanish === true
    ? (
      <div className="login-block" style={{ display: 'block' }}>
        <h1>Login</h1>
        <form>
          <div>
            <input onChange={((event) => { setEmail(event.target.value); })} type="email" placeholder="entrer votre email" />
          </div>
          <div>
            <input onChange={(event) => { setPassword(event.target.value); }} type="password" placeholder="saisissz votre mot de passe" />
          </div>

          <button type="button" onClick={connecter}>Se connecter</button>
        </form>
      </div>
    )
    : <div style={{ display: 'none' }} />);
}
