import React from 'react'
import List from '../List'
import Navbar from '../Navbar';
import styles from './App.module.scss'

const App:React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <List />
    </div>
  );
}

export default App;
