import { useCallback, useState } from 'react';
import styles from './FilesForm.module.css';
import iconAddedFile from '../../assets/icons/addedFile.svg';
import LoaderList from '../LoaderList/LoaderList';
import { deleteListItem } from '../../assets/utils/filterLists';

function FilesForm() {
  const [dropZone, setDropZone] = useState(false);
  const [files, setFiles] = useState([]);
  const classesForm = `${styles.FilesForm} ${dropZone && styles.Active}`;

  const saveToState = useCallback((filesList) => {
    const newFiles = [...files];

    filesList.forEach(file => {
      if(!newFiles.find(item => item.name === file.name)) {
        newFiles.push(file);
      }
    });

    setFiles(newFiles);
  }, [files])

  const deleteFileFromList = useCallback((fileName) => {
    const newFiles = [...deleteListItem(fileName, files)];
    setFiles(newFiles);
  }, [files])

  const onFileSelect = useCallback((e) => {
    const filesList = Object.values(e.target.files);
    saveToState(filesList);
  }, [saveToState])

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    if(!dropZone) {
      setDropZone(true);
    }
  }, [dropZone])
  const onDragLeave = useCallback((e) => {
    if(dropZone) {
      setDropZone(false);
    }
  }, [dropZone])

  const onDrop = useCallback((e) => {
    e.preventDefault();
    if(dropZone) {
      setDropZone(false);
    }
    const fileList = Object.values(e.dataTransfer.files);
    saveToState(fileList);
  }, [dropZone, saveToState])

  return(
    <div className={styles.WrapperForm}>
      <form
        className={classesForm}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onSubmit={e => {e.preventDefault()}}
      >
        <input
          type="file"
          id="files"
          multiple
          onChange={onFileSelect}
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
      {
        files.length ?
        <LoaderList
          filesList={files}
          deleteFile={deleteFileFromList}
        /> :
        <></>
      }
    </div>
  );
}
export default FilesForm;