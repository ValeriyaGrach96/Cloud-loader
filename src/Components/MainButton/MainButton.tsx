import styles from './MainButton.module.css';

interface Props {
  children: JSX.Element
}

function MainButton (props: Props): JSX.Element {
  return (
    <button className={styles.mainButton}>
      {props.children}
    </button>
  );
}

export default MainButton