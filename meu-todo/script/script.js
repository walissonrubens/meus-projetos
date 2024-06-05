let addBtn = document.querySelector("#add_button")
let input = document.querySelector("#input")
let todoContainer = document.querySelector(".todo-container") 

// Evento para adicionar tarefa

addBtn.addEventListener("click", () =>{

    if(input.value == ""){
        return alert("Digite algo")
     }

    let todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    todoContainer.appendChild(todoDiv)

    let titleDiv = document.createElement("div")
    todoDiv.appendChild(titleDiv)
    let todoText = document.createElement("h3")
    titleDiv.appendChild(todoText)

    let btnDiv = document.createElement("div")
    btnDiv.classList.add("buttons")
     todoDiv.appendChild(btnDiv)
    

    todoText.innerHTML = input.value
    input.value = ""

    buttons(btnDiv, todoDiv, todoContainer)
})

// Funções

function buttons(btnContainer, todoDiv, container){
    let btnCheck = document.createElement("button")
    btnCheck.innerHTML = '<i class="bi bi-check-circle"></i>'
    btnContainer.appendChild(btnCheck)

    let btnEdit = document.createElement("button")
    btnEdit.innerHTML = '<i class="bi bi-pencil"></i>'
    btnContainer.appendChild(btnEdit)

    let btnDelete = document.createElement("button")
    btnDelete.innerHTML = '<i class="bi bi-trash3"></i>'
    btnContainer.appendChild(btnDelete)

    btnCheck.addEventListener("click", () =>{
        todoDiv.classList.toggle("check")
        btnContainer.classList.toggle("checkBtn")
    })

    btnEdit.addEventListener("click", ()=>{
        container.classList.add("hide")

        let editInput = document.createElement("input")
        editInput.placeholder = "Edite sua tarefa"

        let divInput = document.createElement("div")
        document.querySelector(".container").appendChild(divInput)
        divInput.appendChild(editInput)
    })
}