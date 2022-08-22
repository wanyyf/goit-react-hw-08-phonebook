import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import s from './registerPage.module.css';
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlerInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          className={s.inputs}
          type="text"
          name="name"
          onChange={handlerInput}
          value={name}
        />
      </label>
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
      <button className={s.btn_regist} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
