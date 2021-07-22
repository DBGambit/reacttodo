let currentId
let tasks

try {
    currentId = localStorage.getItem('tasksId') || '1'
    let tasksWithStringDate = JSON.parse(localStorage.getItem('tasks'))
    tasks = tasksWithStringDate.map(item => {
        return {...item,
            createdDate: new Date(item.createdDate),
            dueOn: new Date(item.dueOn)
        }
    })
}catch (e) {
    console.log('error')
    currentId = '1'
    tasks = []
}

const initialState = {
    lists: tasks
}

export {currentId, initialState}
