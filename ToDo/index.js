const input =document.getElementById('textinput')
const button = document.getElementById('btn')
const taskList = document.getElementById('tasklist')


button.addEventListener('click',()=>{
     addTask()
     input.value = ' '
})

function addTask(){
    const text = input.value.trim()
    if(!text) return
    const li = document.createElement('li')
    li.textContent = text + ' '
    const removeBtn = document.createElement('button')
    removeBtn.type = button
    removeBtn.textContent = 'Remove'
    removeBtn.className = 'remove-btn'
    const toggle = document.createElement('button')
    toggle.type = button
    toggle.textContent = 'Completed'
    toggle.className = 'not-completed'
    li.appendChild(removeBtn)
    li.appendChild(toggle)
    taskList.appendChild(li)
   removeBtn.addEventListener('click',()=>{
    li.remove()
   })
   toggle.addEventListener('click' ,()=> changeToggle(li , toggle))
   
}

function changeToggle(li , toggle){
 li.classList.toggle('completed-task')
 if(li.classList.contains('completed-task')){
    toggle.textContent = 'Undo'
 } else {
    toggle.textContent = 'Completed'
 }
}