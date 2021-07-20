import Card from '../card/card';

import styles from './cards.module.css';

const Cards = ({tasks, editingHandler, btnClickHandler}) => {
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
                                    taskId={item.id}
                                    isDone={item.done}
                                    btnClickHandler={btnClickHandler}
                                    isHidden={item.hidden}
                                />
                            )
                    })
                }
            </div>
        )
}

export default Cards;
