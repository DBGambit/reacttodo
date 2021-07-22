import React, {Component} from 'react';
import {initialState, currentId} from '../../getDataFromLS';
import * as constants from '../../constants';
import {btnClickHandler, filterTasks, finalDateChangeHandler} from './helper';

import UpperSection from '../../components/upperSection/upperSection';
import Cards from '../../components/cards/cards';

import styles from './todo.module.css';

class Todo extends Component {
    static id = Number(currentId)
    state = {
        ...initialState,
        expire: 7,
        type: false
    }

    typeChangeHandler = (id) => {
        const newLists = [...this.state.lists]
        const task = newLists.find(item => item.id === id)
        task.importance = !task.importance
        localStorage.setItem('tasks', JSON.stringify(newLists))
        this.setState({lists: newLists})
    }

    createTask = () => {
        const newLists = [...this.state.lists]
        let now = new Date()
        let final = new Date(now)
        final.setDate(final.getDate() + this.state.expire)
        let newTask = {
            description: 'Click on Edit Button to type',
            id: String(Todo.id++),
            done: false,
            editing: false,
            hidden: false,
            createdDate: now,
            dueOn: final,
            importance: this.state.type
        }
        newLists.push(newTask)
        let forLS = newLists.map(item => {
            return {...item,
                    createdDate: item.createdDate.toISOString(),
                    dueOn: item.dueOn.toISOString()
                }
        })
        localStorage.setItem('tasksId', Todo.id)
        localStorage.setItem('tasks', JSON.stringify(forLS))
        this.setState({lists: newLists})
    }

    searchInputHandler = (e) => {
        let textInput = e.target.value
        const newLists = [...this.state.lists]
        newLists.forEach(item => item.hidden = !item.description.includes(textInput))
        localStorage.setItem('tasks', JSON.stringify(newLists))
        this.setState({lists: newLists})

    }

    editingHandler = (e, id) => {
        const newLists = [...this.state.lists]
        const task = newLists.find(item => item.id === id)
        task.description = e.target.value
        localStorage.setItem('tasks', JSON.stringify(newLists))
        this.setState({lists: newLists})
    }

    changeType = () => {
        this.setState({type: !this.state.type})
    }


    render() {
        return (
                <>
                    <UpperSection
                        createTask={this.createTask}
                        filterHandler={filterTasks.bind(this)}
                        searchHandler={this.searchInputHandler}
                        type={this.state.type}
                        changeType={this.changeType}
                    />
                    <Cards
                        tasks={this.state.lists}
                        editingHandler={this.editingHandler}
                        btnClickHandler={btnClickHandler.bind(this)}
                        finalDateChange={finalDateChangeHandler.bind(this)}
                        typeChange={this.typeChangeHandler}
                    />
                </>
            )
    }
}

export default Todo;
