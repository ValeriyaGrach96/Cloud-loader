import { useCallback, useEffect, useState } from 'react';
import LinksList from '../LinksList/LinksList';
import SettingsContainer from '../SettingsContainer/SettingsContainer';
import styles from './Main.module.css';

function MainContainer() {
  const [resolution, setResolution] = useState('desktop');

  const onResizeWindow = useCallback((event: any) => {
    if(event.target.innerWidth <= 720) {
      setResolution('mobile');
    } else {
      setResolution('desktop');
    }
  }, []);

  useEffect(() => {
    if(window.innerWidth <= 720) {
      setResolution('mobile');
    }
    window.addEventListener('resize', onResizeWindow);
    return () => window.removeEventListener('resize', onResizeWindow)
  }, [onResizeWindow]);
  return(
    <main className={styles.Main} >
      <SettingsContainer />
      {resolution === 'desktop' ? <LinksList /> : <></>}
    </main>
  );
};

export default MainContainer;