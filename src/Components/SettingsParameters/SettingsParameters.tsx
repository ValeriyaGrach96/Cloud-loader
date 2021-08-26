import styles from './SettingsParameters.module.css';

function SettingsParameters (): JSX.Element {
  return (
    <section className={styles.settingsParameters}>
      <p>The shelf life expires after
        <select id="loadAmount">
          <option value="">load amount</option>
          <option value="1">first load</option>
          <option value="2">second load</option>
          <option value="3">third load</option>
          <option value="5">fifth load</option>
          <option value="10">tenth load</option>
        </select>
        or
        <select id="shelfLife">
          <option value="">days load</option>
          <option value="1">1 day</option>
          <option value="2">2 day</option>
          <option value="3">3 day</option>
          <option value="5">5 day</option>
          <option value="10">10 day</option>
        </select>
      </p>
      <form className={styles.passwordForm} onSubmit={e => e.preventDefault}>
        <input type="checkbox" id="isPassword" className={styles.checkbox}/>
        <label htmlFor="isPassword">
          Keep with password
        </label>
        <input type="password" className={styles.password}/>
      </form>
    </section>
  );
 }
 
 export default SettingsParameters;