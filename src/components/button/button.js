
import React from 'react';
import * as constants from '../../constants';
import PropTypes from 'prop-types';

import styles from './button.module.css';
import {Save, Edit, Check, Trash2, CornerUpLeft} from 'react-feather';



const Button = React.memo(({type, taskId, clicking, disabled}) => {

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
})

Button.propTypes = {
    type: PropTypes.string,
    taskId: PropTypes.string,
    clicking: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button;
