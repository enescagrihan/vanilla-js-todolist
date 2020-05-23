const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn')
const completeBtn = document.querySelector('complete-btn')
const todos = document.querySelector('.todos');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let input = todoInput.value;
    
    // new div.todo
    const newTodo = document.createElement('div')
    newTodo.classList.add('todo')
    todos.appendChild(newTodo)

    // new input item
    const listInput = document.createElement('input')
    listInput.classList.add('todo-input')
    listInput.value = input;
    newTodo.appendChild(listInput)

    // new complete button
    const newCompleteBtn = document.createElement('button')
    newCompleteBtn.classList.add('complete-btn')
        // new complete icon
    const completeIcon = document.createElement('i')
    completeIcon.classList.add('fas', 'fa-check')
    newCompleteBtn.appendChild(completeIcon)
    newTodo.appendChild(newCompleteBtn)

    // new edit button
    const newEditBtn = document.createElement('button')
    newEditBtn.classList.add('edit-btn')
        // new edit icon
    const editIcon = document.createElement('i')
    editIcon.classList.add('far', 'fa-edit')
    newEditBtn.appendChild(editIcon)
    newTodo.appendChild(newEditBtn)

    // new delete button
    const newDeleteBtn = document.createElement('button')
    newDeleteBtn.classList.add('delete-btn')
        // new trash icon
    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fas', 'fa-trash')
    newDeleteBtn.appendChild(trashIcon)
    newTodo.appendChild(newDeleteBtn)

    // clear TodoInput's value
    todoInput.value = ''
})

todos.addEventListener('click', (e) => {
    
    // delete item
    if(e.target.classList == 'delete-btn') {
        e.target.parentElement.remove();
    }
    
    // edit item
    if(e.target.classList == 'edit-btn') {
        const parentEl = e.target.parentElement;
        const listInput = parentEl.querySelector('.todo-input');
        listInput.focus();
    }

    // complete item
    if(e.target.classList == 'complete-btn') {
        e.target.parentElement.classList.toggle('completed')
    }
})