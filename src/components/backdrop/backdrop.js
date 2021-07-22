import PropTypes from 'prop-types';

import styles from './backdrop.module.css';

const Backdrop = ({closing}) => {
    return (
            <div onClick={closing} className={styles.BackDrop}>
            </div>
        )
}

Backdrop.propTypes = {
    closing: PropTypes.func
}

export default Backdrop;
