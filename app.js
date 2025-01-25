const containerChecklist = document.querySelector('.containerchecklist');
console.log(containerChecklist)

const addList = ()=>{
    const list = `<div class="containerchecklist">
        <p>Tarea 1</p>
        <button>Editar</button>
        <button>Eliminar</button>
    </div>`
    containerChecklist.innerHTML+= list;
    
}   

