import React from 'react';
import iconFile from '../../assets/icons/iconFiles.svg';
import styles from './LoaderItem.module.css';
import arrowImg from '../../assets/images/downloadImage.svg'

interface Props {
  file: File,
  extended?: boolean,
  deleteFile: (name: String) => void;
}

const LoaderItem = ({file, extended, deleteFile}: Props):JSX.Element => {
  return (<>
    <div className={styles.wrapperFilesItem}>
      <img src={iconFile} alt="icons files" className={styles.iconFiles} />
      <div className={styles.dataWrapper}>
        <p className={styles.fileName}>{file.name}</p>
        <p>{file.size}</p>
      </div>
      <button
        className={styles.closeButton}
        aris-label="delete file"
        onClick={() => deleteFile(file.name)}
      >
        &#x2715;
      </button>
    </div>
    {extended &&
    <div className={styles.extended}>
      <button className={styles.simpleButton}>
        <img src={arrowImg} alt="arraw" width="16px" height="16px"/>
        Download
      </button>
      <button className={styles.simpleButton}>
        Copy Link
      </button>
    </div>
    }
  </>)
}

export default LoaderItem;