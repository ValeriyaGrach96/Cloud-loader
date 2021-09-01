import {useCallback, useEffect, useState} from 'react';
import LinksList from '../LinksList/LinksList';
import SettingsContainer from '../SettingsContainer/SettingsContainer';
import styles from './Main.module.css';

function MainContainer() {
  const [resolution, setResolution] = useState(false);

  const onWindowResize = useCallback( (): void => {
    setResolution(window.innerWidth > 720);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 720) {
      setResolution(true)
    }
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    }
  }, [onWindowResize]);
  return(
    <main className={styles.Main} >
      <SettingsContainer />
      {resolution && <LinksList />}
    </main>
  );
}

export default MainContainer;