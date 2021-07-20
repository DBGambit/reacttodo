import React from 'react';
import * as constants from '../../constants';


import Button from '../button/button';

import styles from './card.module.css';

const Card = ({description, editing, onInputChange, taskId, btnClickHandler, isDone, isHidden}) => {
    return (
            !isHidden ?
            <div className={[styles.Card, isDone ? styles.Done : '', styles.CardAnimation].join(' ')}>
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
