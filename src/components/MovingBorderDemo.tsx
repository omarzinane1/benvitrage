// components/MovingBorderButton.js
import { FC } from 'react';
import styles from '../app/style/MovingBorderDemo.module.css'

interface MovingBorderButtonProps { 
    text: string;
};

const MovingBorderButton:FC<MovingBorderButtonProps> = ({ text }) => {
  return (
    <button className= {styles.button} >
      {text}
    </button>
  );
};

export default MovingBorderButton;
