let button = document.querySelector("#add_button");
let saldo_input = document.querySelector("#valor")
let valor_saldo_positivo = document.querySelector("#valor_saldo_positivo")
let valor_saldo_negativo = document.querySelector("#valor_saldo_negativo")
let tipo_operacao = document.querySelector("#operacao")
let descricao = document.querySelector("#descricao")
let data_input = document.querySelector("#data")
let divList = document.querySelector('.list')

let saldo_inicial = 0
let gasto = 0

button.addEventListener("click", (e) =>{
   if(saldo_input.value == "" || tipo_operacao.value == "null" || descricao.value == "null" || data_input.value == ""){
        alert('Insira todos os valores')
        return
    }

    addEntradaSaida()
        
    let valor = parseFloat(saldo_input.value)

    if(tipo_operacao.value === "Entrada"){
        saldo_inicial += valor
        valor_saldo_positivo.innerHTML = "R$" + saldo_inicial
    }

    if(tipo_operacao.value === "Saída"){
        saldo_inicial -= valor
        gasto += valor
        valor_saldo_positivo.innerHTML = "R$" + saldo_inicial
        valor_saldo_negativo.innerHTML = "R$" + gasto
    }

    saldo_input.value = ""
    tipo_operacao.value = "null"
    descricao.value = "null"
    data_input.value = ""
})


function addEntradaSaida(){
    let itemDiv = document.createElement('div')
    itemDiv.classList.add('list-item')
    divList.appendChild(itemDiv)


    let itemOp = document.createElement('div')	
    itemOp.classList.add('item-operacao')
    itemOp.classList.add('entrada')
    itemDiv.appendChild(itemOp)
    itemOp.textContent = tipo_operacao.value

    if(itemOp.textContent != "Entrada"){
        itemOp.classList.add('saida')
    }

    let itemDesc = document.createElement('div')	
    itemDesc.classList.add('item-desc')
    itemDiv.appendChild(itemDesc)
    itemDesc.textContent = descricao.value

    let itemValor = document.createElement('div')
    itemValor.classList.add('item-valor')
    itemDiv.appendChild(itemValor)
    itemValor.textContent = "R$" + saldo_input.value

    let itemData = document.createElement('div')	
    itemData.classList.add('item-data')
    itemDiv.appendChild(itemData)
    itemData.textContent = data_input.value

   

}