import React, {Component} from 'react';
import Cards from '../../components/cards/cards';

import styles from './todo';

class Todo extends Component {
    state = {
        lists: [
            {
                description: 'playing chess',
                id: '1',
                done: false,
                editing: true
            },
            {
                description: 'doing homeworkkkkkkk khfdhs fdskjfkjdshfksjhfks fhdskjhfksj hfkdsjhfkdsj hfkjdshfksjhfks hkjfsd',
                id: '2',
                done: false,
                editing: false
            }
        ]
    }

    editingHandler = (e, id) => {
        const newLists = [...this.state.lists]
        const task = newLists.find(item => item.id === id)
        task.description = e.target.value
        this.setState({lists: newLists})
    }

    render() {
        return (
                <Cards tasks={this.state.lists} editingHandler={this.editingHandler} />
            )
    }
}

export default Todo;
