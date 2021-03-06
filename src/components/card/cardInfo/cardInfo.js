import PropTypes from 'prop-types';

import styles from './cardInfo.module.css';
import {Edit2} from 'react-feather';

const CardInfo = ({createdDate, dueOn, type, showEdit, dateEditBtnHandler, finalDateChange, taskId, typeChange}) => {
    const isoDate = dueOn.toISOString()
    const slicedDate = isoDate.slice(0,isoDate.indexOf('T'))
    return (
            <div className={styles.Info}>
                <p className={[styles.InfoText, styles.Created].join(' ')}>Created on</p>
                <p className={[styles.InfoText, styles.InfoTextV].join(' ')}>{createdDate.toDateString()}</p>
                <p className={[styles.InfoText, styles.InfoTextV].join(' ')}><span className={styles.Blue}>at</span> {createdDate.toLocaleTimeString()}</p>
                <div className={styles.Expire}>
                    <p className={[styles.InfoText, styles.FixWidth].join(' ')}>Due on</p>
                    <div className={styles.ExpireBtn}>
                        <Edit2 onClick={dateEditBtnHandler} className={styles.Icon} />
                    </div>
                </div>
                {
                    showEdit ?
                    <input
                        className={styles.DateInput}
                        type='date' value={slicedDate}
                        onChange={(e) => finalDateChange(e, taskId)}
                        onKeyDown={(e) => e.preventDefault()}
                    ></input>
                    : <p className={[styles.InfoText, [styles.InfoTextV, styles.InfoTextV].join(' '), styles.InfoTextV].join(' ')}>{Math.floor(((dueOn)-(new Date()))/(24000*60*60))} days left</p>
                }
                <p className={styles.InfoText}>Type <span onClick={() => typeChange(taskId)} className={type ? [styles.Type, styles.Important].join(' ') : styles.Type}>{type ? 'Important' : 'Normal'}</span></p>
            </div>
        )
}

CardInfo.propTypes = {
    createdDate: PropTypes.object,
    dueOn: PropTypes.object,
    type: PropTypes.bool,
    showEdit: PropTypes.bool,
    dateEditBtnHandler: PropTypes.func,
    finalDateChange: PropTypes.func,
    taskId: PropTypes.string,
    typeChange: PropTypes.func
}

export default CardInfo;
