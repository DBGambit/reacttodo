import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../../constants';

import {FilePlus, List, Check, Activity, Search, Plus, Minus} from 'react-feather';

import {ALL, DONE, ACTIVE} from '../../constants';

import styles from './upperSection.module.css';

const UpperSection = React.memo(({createTask, filterHandler, searchHandler, type, changeType, expire, plusMinusHandler}) => {
    return (
            <div className={styles.UpperSection}>
                <div className={styles.Buttons}>
                    <div className={styles.Btn} onClick={createTask}>
                        <FilePlus className={[styles.BtnIcon, styles.Create].join(' ')} />
                    </div>
                    <div className={styles.Settings}>
                        <div className={styles.TypeConfig}>
                            <p onClick={changeType} className={[styles.TextSetting, styles.Clickable].join(' ')}>TYPE</p>
                            <p className={[styles.TextSetting, (type ? styles.Important : styles.Normal)].join(' ')}>{type ? 'Important' : 'Normal'}</p>
                        </div>
                        <div className={styles.TypeConfig}>
                            <p className={styles.TextSetting}>DAYS-{expire}</p>
                            <div className={styles.PlusMinus}>
                                <Minus onClick={() => plusMinusHandler(constants.MINUS)} className={styles.PlusMinusIcon} />
                                <Plus onClick={() => plusMinusHandler(constants.PLUS)} className={styles.PlusMinusIcon} />
                            </div>
                        </div>
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
})

UpperSection.propTypes = {
    createTask: PropTypes.func,
    filterHandler: PropTypes.func,
    searchHandler: PropTypes.func,
    type: PropTypes.bool,
    changeType: PropTypes.func,
    expire: PropTypes.number
}

export default UpperSection;
