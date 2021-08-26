import React, { useCallback, useState } from 'react';
import LoaderItem from '../LoaderItem/LoaderItem';
import styles from './LinksList.module.css';
import { deleteListItem } from '../../assets/utils/filterLists';

const file =  new File(["foo"], "foo.txt", {
  type: "text/plain",
});
const file2 =  new File(["foo2"], "foo2.txt", {
  type: "text/plain",
});

const files = [file, file2]

function LinksList() {
  const [filesInJSX, setFiles] = useState(files);
//doesn't work
  const deleteFileFromList = useCallback((fileName: String) => {
    const newFiles = [...deleteListItem(fileName, filesInJSX)];
    setFiles(newFiles);
  }, [filesInJSX]);

  return(
    <section className={styles.LinksList}>
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
      </ul>
    </section>
  );
}

export default LinksList;