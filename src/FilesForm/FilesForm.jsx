import { useState } from 'react';
import styles from './FilesForm.module.css';
import iconAddedFile from '../assets/icons/addedFile.svg';

function FilesForm() {
  const [dropZone, setDropZone] = useState(false);
  const [files, setFiles] = useState([]);
  const classesForm = `${styles.FilesForm} ${dropZone && styles.Active}`;

  function saveToState(file) {
    const newFiles = files;
    newFiles.push(file);
    setFiles(newFiles);
  }
  function onMouseClick(e) {
    e.preventDefault();
    const filesList = Object.values(e.target.files);
    filesList.forEach(file => {
      if(!files.find(item => item.name === file.name)) {
        saveToState(file);
      }
    });
  }
  function onDragOver(e) {
    e.preventDefault();
    if(!dropZone) {
      setDropZone(true);
    }
  }
  function onDragLeave(e) {
    e.preventDefault();
    if(dropZone) {
      setDropZone(false);
    }
  }
  function onDrop(e) {
    e.preventDefault();
    if(dropZone) {
      setDropZone(false);
    }
    const fileList = Object.values(e.dataTransfer.files);
    fileList.forEach(file => {
      if(!files.find(item => item.name === file.name)) {
        saveToState(file);
      }
    });
  }

  return(
    <div className={styles.WrapperForm}>
      <form
        className={classesForm}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <input
          type="file"
          id="files"
          multiple
          onChange={onMouseClick}
        />
        <label htmlFor="files" className={styles.LabelImage} />
        <label htmlFor="files" className={styles.Label}>
          <img
            src={iconAddedFile}
            alt=""
          />
          Click to choose your files or drag them here
        </label>
      </form>
      <ul className={styles.LoaderList}>
        <li> aaaaa</li>
      </ul>
    </div>
  );
}
export default FilesForm;