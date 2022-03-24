//Busca os elementos do HTML
const elementTitle = document.querySelector('#title')
const elementDescription = document.querySelector('#description')
const elementImage = document.querySelector('#img')
const elementCategory = document.querySelector('#category')
const elementBtnSalvar = document.querySelector('#btnSalvar')
const elementBtnLimpar= document.querySelector('#btnLimpar')
const elementContainer = document.querySelector('.container_main')

//Busca as informações do localStorage e insere no HTML, caso não tenha gera um array vazio
let posts = JSON.parse(localStorage.getItem('posts')) || []

for(let post of posts){
  elementContainer.innerHTML +=`
   <div class="item">
    <img src="${post.image}">
      <h2>${post.title}</h2>       
      <h3>Viagem: ${post.category}<h3>
       <p>
         ${post.description}
       </p>
     </div>
   `
}

//Função para inserir o post no HTML e no localStorage

function insert(){

  if(elementTitle.checkValidity() &&
    elementCategory.checkValidity() &&
    elementDescription.checkValidity() &&
    elementImage.checkValidity()
    ){

      let postPendente = {
        title: elementTitle.value,
        category: elementCategory.options[elementCategory.selectedIndex].value,
        description: elementDescription.value,
        image: elementImage.value
      }

      posts.push(postPendente)
      localStorage.setItem('posts', JSON.stringify(posts))

      elementContainer.innerHTML +=`
        <div class="item">
          <img src="${postPendente.image}">
          <h2>${postPendente.title}</h2>
          <h3>Viagem: ${postPendente.category}<h3>
          <p>
            ${postPendente.description}
          </p>
        </div>
      `
    }else{
      alert('Por favor, preencha as informações!')
  }
}

function clear(){
  elementTitle.value = ''
  elementDescription.value = ''
  elementImage.value = ''
  elementCategory.selectedIndex = 0
}

elementBtnSalvar.addEventListener('click', function(event){
  event.preventDefault()
  insert()
})

elementBtnLimpar.addEventListener('click', function(event){
  event.preventDefault()
  clear()
})