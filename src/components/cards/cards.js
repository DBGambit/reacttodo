import Card from '../card/card';

import styles from './cards.module.css';

const Cards = ({tasks, editingHandler, btnClickHandler, finalDateChange, typeChange}) => {
    return (
            <div className={styles.Cards}>
                {
                    tasks.map(item => {
                        return (
                                <Card
                                    description={item.description}
                                    key={item.id}
                                    editing={item.editing}
                                    onInputChange={editingHandler}
                                    finalDateChange={finalDateChange}
                                    typeChange={typeChange}
                                    taskId={item.id}
                                    isDone={item.done}
                                    btnClickHandler={btnClickHandler}
                                    isHidden={item.hidden}
                                    createdDate={item.createdDate}
                                    dueOn={item.dueOn}
                                    type={item.importance}
                                />
                            )
                    })
                }
            </div>
        )
}

export default Cards;
