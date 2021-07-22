import PropTypes from 'prop-types';

import {XCircle} from 'react-feather';

import Backdrop from '../backdrop/backdrop';

import styles from './modal.module.css';

const Modal = ({show, children, closing, modalHeight, empty, top}) => {
    return (
            show ?
            <>
            <Backdrop show={show} closing={closing} />
            <div className={styles.Modal} style={{height: modalHeight, marginTop: top}}>
                {children}
                {
                    empty ? null :
                    <div className={styles.Closing}>
                        <XCircle onClick={closing} className={styles.CloseBtn} size={33}/>
                    </div>
                }
            </div>
            </> : null
        )
}

Modal.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.object,
    closing: PropTypes.func,
    modalHeight: PropTypes.string,
    empty: PropTypes.bool,
    top: PropTypes.string
}

export default Modal;
