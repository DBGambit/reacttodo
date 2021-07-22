<<<<<<< HEAD
import styles from "./button.module.css";
import Icon from "../../helpers/Icon";

function Button({ type }) {
  const getStyles = (type) => {
    switch (type) {
      case "Edit":
        return styles.Edit;
      case "Delete":
        return styles.Delete;
      case "Add":
        return styles.Add;
      case "Save":
        return styles.Save;
    }
  };

  return (
    <button className={getStyles(type)}>
      <Icon type={type} />
    </button>
  );
=======
import React from 'react';
import * as constants from '../../constants';

import styles from './button.module.css';
import {Save, Edit, Check, Trash2, CornerUpLeft} from 'react-feather';



const Button = ({type, taskId, clicking, disabled}) => {

    const getRightButton = (type) => {
        if (type === constants.EDIT) {
            return <Edit onClick={() => clicking(type, taskId)} className={`${styles.BtnIcon} ${styles.Edit}`} />
        }else if (type === constants.DONE) {
            return <Check onClick={() => clicking(type, taskId)} className={`${styles.BtnIcon} ${styles.Done}`} />
        }else if (type === constants.REMOVE) {
            return <Trash2 onClick={() => clicking(type, taskId)} className={`${styles.BtnIcon} ${styles.Delete} ${disabled ? styles.Disabled : ''}`} />
        }else if (type === constants.SAVE) {
            return <Save onClick={() => clicking(type, taskId)} className={`${styles.BtnIcon} ${styles.Save}`} />
        }else if (type === constants.UNMARK) {
            return <CornerUpLeft onClick={() => clicking(type, taskId)} className={`${styles.BtnIcon} ${styles.Delete}`} />
        }
    }

    return (
            <div className={styles.Btn}>
                {getRightButton(type)}
            </div>
        )
>>>>>>> d741d101148bacddf0cf69236440df1834e1ee99
}

export default Button;
