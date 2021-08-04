import FilesForm from '../FilesForm/FilesForm';
import styles from './SettingsContainer.module.css';

function SettingsContainer() {
  return(
    <section className={styles.SettingsContainer}>
      <FilesForm />
      <div />
      <div />
    </section>
  );
}

export default SettingsContainer;