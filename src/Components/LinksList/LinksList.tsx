import React, { useCallback, useState } from 'react';
import LoaderItem from '../LoaderItem/LoaderItem';
import styles from './LinksList.module.css';
import { deleteListItem } from '../../assets/utils/filterLists';

//only for expample
const file =  new File(["foo"], "foo.txt", {
  type: "text/plain",
});
const file2 =  new File(["foo2"], "foo2.txt", {
  type: "text/plain",
});

function LinksList() {
  const [files, setFiles] = useState([file, file2]);

  const deleteFileFromList = useCallback((fileName: String) => {
    const newFiles = [...deleteListItem(fileName, files)];
    setFiles(newFiles);
  }, [files]);

  return(
    <section className={styles.LinksList}>
      {files.length ?
      <ul>
        {files.map(f => {
          return (
            <li key={f.name} className={styles.listItem}>
              <LoaderItem
                file={f}
                extended
                deleteFile={deleteFileFromList}
              />
            </li>
          )
        })}
      </ul> :
      <p>Your links will be here</p>
      }
    </section>
  );
}

export default LinksList;