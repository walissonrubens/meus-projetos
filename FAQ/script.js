let btnText1 = document.querySelector("#btnText1")
let btnText2 = document.querySelector("#btnText2")
let btnText3 = document.querySelector("#btnText3")
let btnText4 = document.querySelector("#btnText4")

function mostrarTexto(text, e){
	
	text.classList.toggle("about-display") 

	let targetEl = e.target
	parentEl = targetEl.closest("div")
	parentEl.classList.toggle("img-container")
	parentEl.classList.toggle("img-container-done")
	
	let parentImg = targetEl.closest("div").querySelector("img");
        let currentSrc = parentImg.getAttribute("src");

        if (currentSrc.includes("icon-plus")) {
       	 parentImg.setAttribute("src", "images/icon-minus.svg");
    	} else {
       	 parentImg.setAttribute("src", "images/icon-plus.svg");
        }
	
}


btnText1.addEventListener("click", (e) =>{
	let primeiroTexto = document.querySelector("#text1")
	mostrarTexto(primeiroTexto, e)

})

btnText2.addEventListener("click", (e) =>{
	let segundoTexto = document.querySelector("#text2")
	mostrarTexto(segundoTexto, e)
	
})

btnText3.addEventListener("click", (e) =>{
	let terceiroTexto = document.querySelector("#text3")
	mostrarTexto(terceiroTexto, e)
	
})

btnText4.addEventListener("click", (e) =>{
	let quartoTexto = document.querySelector("#text4")
	mostrarTexto(quartoTexto, e)
	
})