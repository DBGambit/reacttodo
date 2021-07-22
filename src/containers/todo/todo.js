<<<<<<< HEAD
import React, { Component } from "react";
import Cards from "../../components/cards/cards";
import Button from "../../components/button/button";
import styles from "./todo.module.css";

class Todo extends Component {
  state = {
    lists: [
      {
        description: "playing chess",
        id: "1",
        done: false,
        editing: true,
      },
      {
        description:
          "doing homeworkkkkkkk khfdhs fdskjfkjdshfksjhfks fhdskjhfksj hfkdsjhfkdsj hfkjdshfksjhfks hkjfsd",
        id: "2",
        done: false,
        editing: false,
      },
    ],
  };

  editingHandler = (e, id) => {
    const newLists = [...this.state.lists];
    const task = newLists.find((item) => item.id === id);
    task.description = e.target.value;
    this.setState({ lists: newLists });
  };

  render() {
    return (
      <>
        <h3>Todo</h3>

        <Button type="Add" />
        <Cards tasks={this.state.lists} editingHandler={this.editingHandler} />
      </>
    );
  }
=======
import React, {Component} from 'react';
import {initialState, currentId} from '../../getDataFromLS';
import * as constants from '../../constants';

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

    finalDateChangeHandler = (e, id) => {
        let temp = new Date(e.target.value)
        const newLists = [...this.state.lists]
        const task = newLists.find(item => item.id === id)
        if (temp - task.createdDate < 0) {
            return
        }
        task.dueOn = temp
        let forLS = newLists.map(item => {
            return {...item,
                    dueOn: item.dueOn.toISOString()
                }
        })
        localStorage.setItem('tasks', JSON.stringify(forLS))
        this.setState({lists: newLists})
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
                        finalDateChange={this.finalDateChangeHandler}
                        typeChange={this.typeChangeHandler}
                    />
                </>
            )
    }
>>>>>>> d741d101148bacddf0cf69236440df1834e1ee99
}

export default Todo;
