import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated);

  const logoutHandler = () => {
      dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
          { auth &&
            <a href='/'>My Products</a>
          }
          </li>
         <li>
         { auth &&
            <a href='/'>My Sales</a>
         }
          </li> 
        <li>
        { auth  && 
            <button onClick={logoutHandler}>Logout</button>
        }
          </li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;