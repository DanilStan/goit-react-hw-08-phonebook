import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/auth-operations';
import { getUsername } from 'redux/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(getUsername);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.box}>
      <div className={css.miniBox}>
        <span className={css.name}>Welcome, {name}!</span>
        <button className={css.exit} type="button" onClick={handleLogOut}>
          Exit
        </button>
      </div>
    </div>
  );
}
