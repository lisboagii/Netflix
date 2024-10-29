let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")


// LIGAR O SOM
botaoSom.addEventListener("click" , ligaSom)

function ligaSom(){
   video.muted = false
}

// MOSTRAR O MODAL
botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

   function mostrarModal(){
      modal.style.display = "block"
   }

   function esconderModal() {
      modal.style.display = "none"
   }
