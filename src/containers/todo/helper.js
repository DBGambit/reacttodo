import * as constants from '../../constants';
export function btnClickHandler(type, id){
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
        try {
            localStorage.setItem('tasks', JSON.stringify(newLists))
        }catch(e) {
            console.log('ls err')
        }
        this.setState({lists: newLists})
    }

export function filterTasks(type) {
        const newLists = [...this.state.lists]
        if (type === constants.ALL) {
            newLists.forEach(item => item.hidden = false)
        }else if (type === constants.DONE) {
            newLists.forEach(item => item.hidden = item.done ? false : true)
        }else if (type === constants.ACTIVE) {
            newLists.forEach(item => item.hidden = item.done ? true : false)
        }
        try {
            localStorage.setItem('tasks', JSON.stringify(newLists))
        }catch(e) {
            console.log('localstorage error')
        }
        this.setState({lists: newLists})
    }

export function finalDateChangeHandler(e, id) {
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
        try{
            localStorage.setItem('tasks', JSON.stringify(forLS))
        }catch(e) {
            console.log('please enable localstorage')
        }
        this.setState({lists: newLists})
    }
