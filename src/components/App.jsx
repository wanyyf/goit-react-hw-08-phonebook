import { ContactForm } from './ContactForm/ContactForm';
import { Navigate, Route, Routes } from 'react-router';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import UserMenu from './UserMenu/UserMenu';
export function App() {
  const isLoged = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  console.log(isLoged);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      {isLoged && <UserMenu />}

      <Routes>
        <Route
          path="/"
          element={<PublicRoute component={HomePage} restricted />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={RegisterPage} restricted />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={LoginPage} restricted />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactForm} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
