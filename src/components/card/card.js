import React, {useState} from 'react';
import * as constants from '../../constants';
import {Info, Edit2, AlertTriangle} from 'react-feather';

import Button from '../button/button';
import Modal from '../modal/modal';
import CardInfo from './cardInfo/cardInfo';

import styles from './card.module.css';

const Card = ({description, editing, onInputChange, taskId, btnClickHandler, isDone, isHidden, createdDate, dueOn, type, finalDateChange, typeChange}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [editDays, setEditDays] = useState(false)

    const infoBtnClickHandler = () => {
        setShowInfo(!showInfo)
        setEditDays(false)
    }

    const dateEditBtnHandler = () => {
        setEditDays(!editDays)
    }

    const dateString = createdDate.toDateString()
    const date = dateString.slice(0, dateString.lastIndexOf(' '))

    return (
            !isHidden ?
            <div className={[styles.Card, isDone ? styles.Done : '', styles.CardAnimation].join(' ')}>
                <Modal show={showInfo} closing={infoBtnClickHandler}>
                    <CardInfo typeChange={typeChange} taskId={taskId} finalDateChange={finalDateChange} dateEditBtnHandler={dateEditBtnHandler} showEdit={editDays} createdDate={createdDate} dueOn={dueOn} type={type} />
                </Modal>
                <div className={styles.DateWrapper}>
                    <p className={styles.Date}>{date}</p>
                    {
                        type ?
                        <div className={[styles.Info, styles.Important].join(' ')}>
                            <AlertTriangle className={styles.ImportantIcon} />
                        </div>
                        : null
                    }
                    <div className={styles.Info}>
                        <Info onClick={infoBtnClickHandler} className={styles.InfoBtn} />
                    </div>
                </div>
                <textarea
                    type='textarea'
                    className={[styles.Text, isDone ? styles.DoneText : '', editing ? styles.Typing : ''].join(' ')}
                    readOnly={!editing}
                    defaultValue={description}
                    spellCheck="false"
                    onChange={(e) => onInputChange(e, taskId)}
                />
                <div className={styles.Buttons}>
                    {
                        !isDone ?
                        <Button taskId={taskId} clicking={btnClickHandler} type={editing ? constants.SAVE : constants.EDIT} />
                        : null
                    }
                    {
                        !editing ?
                            <Button clicking={btnClickHandler} taskId={taskId} type={isDone ? constants.UNMARK : constants.DONE} />
                        : null
                    }
                    <Button clicking={btnClickHandler} disabled={editing} taskId={taskId} type={constants.REMOVE} />
                </div>
            </div>
            : null
        )
}

export default Card;
