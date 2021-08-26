import FilesForm from '../FilesForm/FilesForm';
import MainButton from '../MainButton/MainButton';
import SettingsParameters from '../SettingsParameters/SettingsParameters';
import styles from './SettingsContainer.module.css';

function SettingsContainer() {
  return(
    <section className={styles.SettingsContainer}>
      <FilesForm />
      <SettingsParameters />
      <MainButton>
        Upload
      </MainButton>
    </section>
  );
}

export default SettingsContainer;