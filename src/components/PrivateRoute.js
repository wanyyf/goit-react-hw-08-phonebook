import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, ...props }) => {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);

  return isAuth ? <Component {...props} /> : <Navigate to="/" />;
};

export default PrivateRoute;
