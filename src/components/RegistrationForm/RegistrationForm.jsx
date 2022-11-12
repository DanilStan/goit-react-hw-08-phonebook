import { Box } from 'components/Box';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './RegistrationForm.module.css';
import { register } from 'redux/auth/auth-operations';
import { Link } from 'react-router-dom';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
    repPassword: setRepPassword,
  };

  const handleInput = e => {
    inputs[e.target.name](e.target.value.trim());
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (password === repPassword) {
      const userInfo = {
        name,
        email,
        password,
      };

      dispatch(register(userInfo));
      setName('');
      setEmail('');
      setPassword('');
      setRepPassword('');
    } else {
      toast.error('Try entering the password again');
    }
  };

  return (
    <Box>
      <div className={css.box}>
        <h2 className={css.title}>Please register to continue</h2>
        <form className={css.form} onSubmit={handleFormSubmit}>
          <input
            required
            onChange={handleInput}
            name="name"
            value={name}
            type="text"
            className={css.full}
            placeholder="Name"
          />
          <input
            required
            onChange={handleInput}
            name="email"
            value={email}
            type="email"
            className={css.full}
            placeholder="Email"
          />
          <input
            required
            onChange={handleInput}
            name="password"
            value={password}
            type="password"
            className={css.full}
            placeholder="Password"
          />
          <input
            required
            onChange={handleInput}
            name="repPassword"
            value={repPassword}
            type="password"
            className={css.full}
            placeholder="Repeat password"
          />
          <Link className={css.text} to="/login">
            Has account?
          </Link>
          <button className={css.add} type="submit">
            Sign up
          </button>
        </form>{' '}
      </div>
    </Box>
  );
};
