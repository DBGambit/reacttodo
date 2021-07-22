import {XCircle} from 'react-feather';

import Backdrop from '../backdrop/backdrop';

import styles from './modal.module.css';

const Modal = ({show, children, closing}) => {
    return (
            show ?
            <>
            <Backdrop show={show} closing={closing} />
            <div className={styles.Modal}>
                {children}
                <div className={styles.Closing}>
                    <XCircle onClick={closing} className={styles.CloseBtn} size={33}/>
                </div>
            </div>
            </> : null
        )
}

export default Modal;
