import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

const PublicRoute = ({ restricted, component: Component, ...props }) => {
  const isAuth = useSelector(getIsLoggedIn);

  return isAuth && restricted ? (
    <Navigate to="/contacts" />
  ) : (
    <Component {...props} />
  );
};

export default PublicRoute;
