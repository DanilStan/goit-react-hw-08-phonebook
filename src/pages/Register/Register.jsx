import { RegistrationForm } from 'components/RegistrationForm';
import React from 'react';
import css from './Register.module.css';

export default function Registration() {
  return (
    <>
      <span className={css.circle}></span>
      <RegistrationForm />
    </>
  );
}
