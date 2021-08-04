import React from 'react';
import LinksList from '../LinksList/LinksList';
import SettingsContainer from '../SettingsContainer/SettingsContainer';
import styles from './Main.module.css';

function MainContainer() {
  return(
    <main className={styles.Main} >
      <SettingsContainer />
      <LinksList />
    </main>
  );
};

export default MainContainer;