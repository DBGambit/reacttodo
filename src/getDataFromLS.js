export const currentId = localStorage.getItem('tasksId') || '1'
const tasks = localStorage.getItem('tasks')
export const initialState = {
    lists: tasks ? JSON.parse(tasks) : []
}
