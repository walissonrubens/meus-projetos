let addBtn = document.querySelector("#add_button")
let input = document.querySelector("#input")
let todoContainer = document.querySelector(".todo-container")

// Evento para adicionar tarefa clique
addBtn.addEventListener("click", () => {

    if (input.value == "") {
        return alert("Digite algo") 
    }

    let todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    todoContainer.appendChild(todoDiv)

    let titleDiv = document.createElement("div")
    todoDiv.appendChild(titleDiv)
    let todoText = document.createElement("h3")
    titleDiv.appendChild(todoText)
    titleDiv.classList.add("todo-title")

    let btnDiv = document.createElement("div")
    btnDiv.classList.add("buttons")
    todoDiv.appendChild(btnDiv)


    todoText.innerHTML = input.value
    input.value = ""

    buttons(btnDiv, todoDiv, todoContainer)
})

// Evento para adiconar tarefa tecla enter

input.addEventListener("keydown", (e) => {

    if (e.keyCode == 13) {
        if (input.value == "") {
            return alert("Digite algo")
        }

        let todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")
        todoContainer.appendChild(todoDiv)

        let titleDiv = document.createElement("div")
        todoDiv.appendChild(titleDiv)
        let todoText = document.createElement("h3")
        titleDiv.appendChild(todoText)
        titleDiv.classList.add("todo-title")

        let btnDiv = document.createElement("div")
        btnDiv.classList.add("buttons")
        todoDiv.appendChild(btnDiv)


        todoText.innerHTML = input.value
        input.value = ""

        buttons(btnDiv, todoDiv, todoContainer)
    }
})

// Funções

function buttons(btnContainer, todoDiv, container) {
    // Criar botões
    let btnCheck = document.createElement("button")
    btnCheck.innerHTML = '<i class="bi bi-check-circle"></i>'
    btnContainer.appendChild(btnCheck)

    let btnEdit = document.createElement("button")
    btnEdit.innerHTML = '<i class="bi bi-pencil"></i>'
    btnContainer.appendChild(btnEdit)

    let btnDelete = document.createElement("button")
    btnDelete.innerHTML = '<i class="bi bi-trash3"></i>'
    btnContainer.appendChild(btnDelete)

    // Evento de confirmar tarefa
    btnCheck.addEventListener("click", () => {
        todoDiv.classList.toggle("check")
        btnContainer.classList.toggle("checkBtn")
    })

    btnDelete.addEventListener("click", (e)=>{
        let targetEl = e.currentTarget.closest(".todo")
        targetEl.remove()
    })

    // Evento do botão de edição
    btnEdit.addEventListener("click", (e) => {
        container.classList.add("hide")

        let targetEl = e.currentTarget.closest(".todo")
        let targetText = targetEl.querySelector(".todo-title h3")

        let divContainer = document.createElement("div")
        divContainer.classList.add("container")
        document.querySelector(".container").appendChild(divContainer)

        let editTitle = document.createElement("h3")
        editTitle.innerText = "Edite sua tarefa"
        divContainer.appendChild(editTitle)

        let editInput = document.createElement("input")
        editInput.value = targetText.textContent
        divContainer.appendChild(editInput)

        let editBtnConfirm = document.createElement("button")
        editBtnConfirm.innerHTML = '<i class="bi bi-check-circle"></i>'
        divContainer.appendChild(editBtnConfirm)

        // Evento do botão para confirmar edição
        editBtnConfirm.addEventListener("click", () => {
            container.classList.remove("hide")
            targetText.textContent = editInput.value
            divContainer.classList.add("hide");
        })

        // Evento para confirmar com tecla enter

        editInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                container.classList.remove("hide")
                targetText.textContent = editInput.value
                divContainer.classList.add("hide");
            }
        })
    })
    
}
