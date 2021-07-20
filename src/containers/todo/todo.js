import React, {Component} from 'react';
import {initialState, currentId} from '../../getDataFromLS';
import * as constants from '../../constants';

import UpperSection from '../../components/upperSection/upperSection';
import Cards from '../../components/cards/cards';

import styles from './todo.module.css';

class Todo extends Component {
    static id = Number(currentId)
    state = {
        ...initialState
    }

    createTask = () => {
        const newLists = [...this.state.lists]
        let newTask = {
            description: '',
            id: String(Todo.id++),
            done: false,
            editing: false,
            hidden: false
        }
        newLists.push(newTask)
        localStorage.setItem('tasksId', Todo.id)
        localStorage.setItem('tasks', JSON.stringify(newLists))
        this.setState({lists: newLists})
    }

    filterTasks = (type) => {
        const newLists = [...this.state.lists]
        if (type === constants.ALL) {
            newLists.forEach(item => item.hidden = false)
        }else if (type === constants.DONE) {
            newLists.forEach(item => item.hidden = item.done ? false : true)
        }else if (type === constants.ACTIVE) {
            newLists.forEach(item => item.hidden = item.done ? true : false)
        }
        localStorage.setItem('tasks', JSON.stringify(newLists))
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

    btnClickHandler = (type, id) => {
        const newLists = [...this.state.lists]
        const task = newLists.find(item => item.id === id)
        if (type === constants.EDIT) {
            task.editing = true
        }else if (type === constants.SAVE) {
            task.editing = false
        }else if (type === constants.DONE) {
            task.done = true
        }else if (type === constants.REMOVE) {
            if (task.editing === true) {
                return
            }
            newLists.splice(newLists.indexOf(task), 1)
        }else if (type === constants.UNMARK) {
            task.done = false
        }
        localStorage.setItem('tasks', JSON.stringify(newLists))
        this.setState({lists: newLists})
    }


    render() {
        return (
                <>
                    <UpperSection
                        createTask={this.createTask}
                        filterHandler={this.filterTasks}
                        searchHandler={this.searchInputHandler}
                    />
                    <Cards
                        tasks={this.state.lists}
                        editingHandler={this.editingHandler}
                        btnClickHandler={this.btnClickHandler}
                    />
                </>
            )
    }
}

export default Todo;
