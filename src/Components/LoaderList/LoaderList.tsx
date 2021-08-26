import React from "react";
import LoaderItem from "../LoaderItem/LoaderItem";
import styles from "./LoaderList.module.css";

interface Props {
  filesList: File[],
  deleteFile: (name: String) => void,
}

const LoaderList = ({ filesList, deleteFile }: Props): JSX.Element => {
  return (
    <ul className={styles.LoaderList}>
      {filesList.map((file) => {
        return (
          <li className={styles.LoaderItem} key={file.name}>
            <LoaderItem file={file} deleteFile={deleteFile} />
          </li>
        );
      })}
    </ul>
  );
};

export default LoaderList;
