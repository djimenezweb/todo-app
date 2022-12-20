/*
      <div class="task-container">
        <div class="task">
          <input type="checkbox" class="task__input" id="xxx" hidden>
          <label for="xxx" class="task__label">Tarea</label>
        </div>
        <img src="assets/images/icon-cross.svg" alt="Delete" class="task__delete" da="545454545delete">
      </div>
*/
const generateTimeStamp = () => Date.now()
const formInput = document.getElementById('todo-input')
const form = document.getElementById('form')
const todoList = document.getElementById('todo-list')

function addTask(task) {

  const timeStamp = generateTimeStamp();

  const newTaskContainer = document.createElement('div')
  newTaskContainer.classList.add("task-container")
  newTaskContainer.id = `id-${timeStamp}`

  const newTask = document.createElement('div')
  newTask.classList.add('task')

  const newInput = document.createElement('input')
  newInput.type = "checkbox"
  newInput.id = timeStamp
  newInput.classList.add("task__input")

  const newLabel = document.createElement('label')
  newLabel.classList.add("task__label")
  newLabel.htmlFor = timeStamp
  newLabel.textContent = task

  const newDelete = document.createElement('img')
  newDelete.src = "assets/images/icon-cross.svg"
  newDelete.classList.add('task__delete')
  newDelete.dataset.id = timeStamp

  newTask.append(newLabel)
  newTask.prepend(newInput)
  newTaskContainer.prepend(newTask)
  newTaskContainer.append(newDelete)

  return newTaskContainer
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  document.getElementById('todo-list').prepend(addTask(e.target.todo.value))
  e.target.todo.value = null
})

todoList.addEventListener('click', (e) => {
  if (!e.target.dataset.id) return

  const element = document.getElementById(`id-${e.target.dataset.id}`)
  element.remove()

})
