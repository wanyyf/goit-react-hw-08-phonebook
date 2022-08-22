import { NavLink } from 'react-router-dom';
import s from './homePage.module.css';
const HomePage = () => {
  return (
    <>
      <NavLink className={s.button_nav} to="/register">
        Register{' '}
      </NavLink>
      <NavLink className={s.button_nav} to="/login">
        LogIn{' '}
      </NavLink>
    </>
  );
};

export default HomePage;
