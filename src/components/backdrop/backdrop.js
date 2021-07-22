import PropTypes from 'prop-types';

import styles from './backdrop.module.css';

const Backdrop = ({show, closing}) => {
    return (
            show ?
            <div onClick={closing} className={styles.BackDrop}>
            </div>
            : null
        )
}

Backdrop.propTypes = {
    show: PropTypes.bool,
    closing: PropTypes.func
}

export default Backdrop;
