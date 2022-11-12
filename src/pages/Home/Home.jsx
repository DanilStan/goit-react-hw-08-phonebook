import { Box } from 'components/Box';
import React from 'react';
import css from './Home.module.css';

export default function Home() {
  return (
    <Box>
      <p className={css.text}>
        Please register or log in to your account to continue
      </p>
      <span className={css.circle}></span>
    </Box>
  );
}
