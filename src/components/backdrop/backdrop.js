import styles from './backdrop.module.css';

const Backdrop = ({show, closing}) => {
    return (
            show ?
            <div onClick={closing} className={styles.BackDrop}>
            </div>
            : null
        )
}

export default Backdrop;
