const showButton = document.getElementById("showDialog");
const ItenList = document.querySelector(".iten-list")
const favDialog = document.getElementById("favDialog");
const confirmBtn = document.querySelector("#confirmBtn");
const AuthorInput = document.querySelector("#Author"); 
const TitleInput = document.querySelector("#title"); 
const PageInput = document.querySelector("#Pages"); 
const DescriptionInput = document.querySelector("#desc");
const BackGroundInput = document.querySelector("#back");
const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

/**
  * TODOs:
  * * Adicione uma maneira de elimnar livros
  * ? (coloque um botão na div que elimina sua node pai)  
  * * estilize a pagina
  * ? o botão do topo precisa de  uma corzinha e da uma pesquisada de como fazer qualquer imagem ficar no tamanho certo
  * *faça com que o estado da pagina seja lembrado
  * ? SEI LA COMO FAZER ISSO
  * * Botão se foi lido ou não
  * ? e so adicionar uma classse ao botão e retirala com um clique
  * ! REFATORA ESSE CODIGO  ELE TA UMA BOSTA UMA MERDA UM COCO
*/ 



// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  let Book = {
    author: AuthorInput.value,
    title: TitleInput.value,
    PageNum: PageInput.value,
    Description: DescriptionInput.value,
    BackGround: BackGroundInput.value
    }
  addBookToLibrary(Book)
});
//essa função deve pegar livros apartir do input do usuario e criar adicionar eles

function addBookToLibrary(Book) {
    const div = document.createElement("div");
    div.classList.add("iten");
    div.style.backgroundImage = ` url('${Book.BackGround}')`
    div.innerHTML = 
    `
    <h3>${Book.title}</h3>
    <span>Paginas: ${Book.PageNum}</span>
    <p>${Book.Description}</p>
    `
    ItenList.appendChild(div)

}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 

//event.target.parentNode.parentNode.remove();