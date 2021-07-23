import React, {useState, useRef} from 'react';
import * as constants from '../../constants';
import PropTypes from 'prop-types';
import {Info, Edit2, AlertTriangle, CornerDownLeft, Check} from 'react-feather';

import Button from '../button/button';
import Modal from '../modal/modal';
import CardInfo from './cardInfo/cardInfo';

import styles from './card.module.css';

const Card = React.memo(({description, editing, onInputChange, taskId, btnClickHandler, isDone, isHidden, createdDate, dueOn, type, finalDateChange, typeChange}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [editDays, setEditDays] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const textInput = useRef(null)

    const infoBtnClickHandler = () => {
        setShowInfo(!showInfo)
        setEditDays(false)
    }

    const dateEditBtnHandler = () => {
        setEditDays(!editDays)
    }

    const deletingMenuOpener = () => {
        setDeleting(!deleting)
    }

    const makeFocus = () => {
        textInput.current.focus()
    }

    const dateString = createdDate.toDateString()
    const date = dateString.slice(0, dateString.lastIndexOf(' '))

    return (
            !isHidden ?
            <div className={[styles.Card, isDone ? styles.Done : '', styles.CardAnimation].join(' ')}>
                <Modal top='5%' empty={false} modalHeight='80%' show={showInfo} closing={infoBtnClickHandler}>
                    <CardInfo typeChange={typeChange} taskId={taskId} finalDateChange={finalDateChange} dateEditBtnHandler={dateEditBtnHandler} showEdit={editDays} createdDate={createdDate} dueOn={dueOn} type={type} />
                </Modal>
                <Modal top='30%' empty={true} modalHeight='50%' show={deleting} closing={deletingMenuOpener}>
                    <div>
                        <p className={styles.DeletionText}>Are you sure ?</p>
                        <div className={styles.DeletionButtons}>
                            <CornerDownLeft onClick={deletingMenuOpener} className={styles.DeletionIcons} />
                            <Check onClick={() => btnClickHandler(constants.REMOVE,taskId)} className={[styles.DeletionIcons, styles.Confirm].join(' ')} />
                        </div>
                    </div>
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
                    ref={textInput}
                />
                <div className={styles.Buttons}>
                    {
                        !isDone ?
                        <Button makeFocus={makeFocus} taskId={taskId} clicking={btnClickHandler} type={editing ? constants.SAVE : constants.EDIT} />
                        : null
                    }
                    {
                        !editing ?
                            <Button clicking={btnClickHandler} taskId={taskId} type={isDone ? constants.UNMARK : constants.DONE} />
                        : null
                    }
                    <Button clicking={deletingMenuOpener} disabled={editing} taskId={taskId} type={constants.REMOVE} />
                </div>
            </div>
            : null
        )
})

Card.propTypes = {
    description: PropTypes.string,
    editing: PropTypes.bool,
    onInputChange: PropTypes.func,
    taskId: PropTypes.string,
    btnClickHandler: PropTypes.func,
    isDone: PropTypes.bool,
    isHidden: PropTypes.bool,
    createdDate: PropTypes.object,
    dueOn: PropTypes.object,
    type: PropTypes.bool,
    finalDateChange: PropTypes.func,
    typeChange: PropTypes.func
}

export default Card;
