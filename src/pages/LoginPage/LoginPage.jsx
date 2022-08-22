import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import s from './loginPage.module.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handlerInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const onSubmit = evt => {
    evt.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Email
        <input
          className={s.inputs}
          type="text"
          name="email"
          onChange={handlerInput}
          value={email}
        />
      </label>
      <label>
        password
        <input
          className={s.inputs}
          type="text"
          name="password"
          onChange={handlerInput}
          value={password}
        />
      </label>
      <button className={s.btn_login} type="submit">
        LogIn
      </button>
    </form>
  );
};

export default LoginPage;
