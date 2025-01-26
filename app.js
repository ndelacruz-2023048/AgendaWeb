let containerChecklist = document.querySelector('.containerchecklist');
const newTask = document.querySelector('.newTask');
const updateTask = document.querySelector('.updateTask');

const inputDescriptionTask = document.querySelector('#inputdescriptiontask')
const inputdescriptiontaskUpdate = document.querySelector('#inputdescriptiontaskupdate')
const selectPriority = document.querySelector('#selectpriority');
const selectPriorityUpdate = document.querySelector('#selectpriorityupdate');

const btnSave = document.querySelector('.save');
const btnUpdate = document.querySelector('.update')
const btnCancel = document.querySelectorAll('.cancel')

let contador = 0;
let listTasks = []
let taskIdSelected = 0
let priorities= {
   1:"Urgente" ,
   2:"Importante",
   3:"No Urgente ni Importante",
   4:"Delegable",
   5:"Posponer"
}

const clearData = () => {
    inputDescriptionTask.value = ''
    selectPriority.selectedIndex = 0
    inputdescriptiontaskUpdate.value = ''
    selectPriorityUpdate.selectedIndex = 0
}

const addList = () => {
    newTask.classList.add('visible');
}

const removeModal = ()=>{
    newTask.classList.remove('visible');
    updateTask.classList.remove('visible')
}

btnCancel.forEach((e)=>{
    console.log(e.addEventListener('click',removeModal))
})



function orderList() {
    listTasks.sort((a, b) => a.taskPriorityNumber - b.taskPriorityNumber)
    return listTasks
}

function printData() {
    containerChecklist.innerHTML = ''
    listTasks.forEach((e) => {
        containerChecklist.innerHTML += `<div data-id="${e.taskPriorityNumber}" id="${e.id}"                         class="taskadded">
        <div class="taskadded_fields">
            <label for="taskdescription" class="labeltask">Tarea:</label>
            <p class="taskdescription">${e.taskDescription}</p>
        </div>  
        <div class="taskadded_fields">
            <label for="taskpriority" class="labeltask">Prioridad de la tarea:</label>
            <p class="taskpriority">${priorities[e.taskPriorityNumber]}</p>
        </div>   
        
        <div class="taskadded_buttons">
            <button class="newTask_btn" onClick=updateList(${e.id})>Editar</button>
            <button class="newTask_btn" onClick=deleteList(${e.id})>Eliminar</button>
        </div>
        
        </div>`
    })
}

btnSave.addEventListener('click', (e) => {
    let data = {
        id: contador += 1,
        taskDescription: inputDescriptionTask.value,
        taskPriorityNumber: selectPriority.value,
    }
    listTasks.push(data)
    newTask.classList.remove('visible');
    clearData()
    orderList()
    printData()

})

btnUpdate.addEventListener('click', () => {
    let data = {
        id: contador += 1,
        taskDescription: inputdescriptiontaskUpdate.value,
        taskPriorityNumber: selectPriorityUpdate.value,
    }
    listTasks = listTasks.map(e => {
        if (e.id === taskIdSelected) {
            e.taskDescription = data.taskDescription
            e.taskPriorityNumber= data.taskPriorityNumber
        }
        return e
    })
    updateTask.classList.remove('visible');
    orderList()
    printData()
})

const showDataUpdate = (busqueda) => {
    inputdescriptiontaskUpdate.value = busqueda[0].taskDescription
    selectPriorityUpdate.value = busqueda[0].taskPriorityNumber
}

const updateList = (id) => {
    console.log(id)
    taskIdSelected= id
    let busqueda = listTasks.filter(e => e.id === id)
    console.log(busqueda)
    updateTask.classList.add('visible');
    showDataUpdate(busqueda)

}

const deleteList = (id)=>{
    listTasks=listTasks.filter(e=> e.id !==id)
    orderList()
    printData()
}


