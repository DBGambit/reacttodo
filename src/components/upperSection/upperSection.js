import {FilePlus, List, Check, Activity, Search} from 'react-feather';

import {ALL, DONE, ACTIVE} from '../../constants';

import styles from './upperSection.module.css';

const UpperSection = ({createTask, filterHandler, searchHandler}) => {
    return (
            <div className={styles.UpperSection}>
                <div className={styles.Buttons}>
                    <div className={styles.Btn} onClick={createTask}>
                        <FilePlus className={[styles.BtnIcon, styles.Create].join(' ')} />
                    </div>
                    <div className={styles.Btn} onClick={() => filterHandler(ALL)}>
                        <List className={[styles.BtnIcon, styles.All].join(' ')} />
                    </div>
                    <div className={styles.Btn} onClick={() => filterHandler(DONE)}>
                        <Check className={[styles.BtnIcon, styles.Completed].join(' ')} />
                    </div>
                    <div className={styles.Btn} onClick={() => filterHandler(ACTIVE)}>
                        <Activity className={[styles.BtnIcon, styles.Active].join(' ')} />
                    </div>
                </div>
                <div className={styles.SearchSection}>
                    <div className={styles.SearchBtn}>
                        <Search className={styles.Search} />
                    </div>
                    <input
                        spellCheck={false}
                        className={styles.SearchInput}
                        onChange={(e) => searchHandler(e)}
                    >
                    </input>
                </div>
            </div>
        )
}

export default UpperSection;
