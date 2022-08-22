import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';
import { getUserEmail, getUsername } from '../../redux/auth/auth-selectors';
import s from './userMenu.module.css';
const UserMenu = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const email = useSelector(getUserEmail);
  const name = useSelector(getUsername);

  return (
    <>
      <button
        className={s.buttons}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        User Info
      </button>
      {isOpen && (
        <div className={s.info}>
          <p>{name}</p>
          <p>{email}</p>
          <button
            className={s.buttons}
            type="submit"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default UserMenu;
