// Seleção de elementos do DOM
const showButton = document.getElementById("showDialog"); // Botão para mostrar o modal
const header = document.getElementById("myHeader"); // Cabeçalho da página
const sticky = header.offsetTop; // Posição inicial do cabeçalho

// Adicionando evento de clique ao botão "showButton" para abrir o modal
showButton.addEventListener("click", () => {
  favDialog.showModal(); // Mostra o modal
});

// Função para adicionar um livro à biblioteca
function addBookToLibrary(Book) {
  // Seleciona a lista de itens da biblioteca
  const ItenList = document.querySelector(".iten-list");
  // Cria um novo elemento div para representar o livro
  const div = document.createElement("div");

  div.classList.add("iten"); // Adiciona a classe "iten" à div
  div.style.backgroundImage = `url('${Book.BackGround}')`; // Define a imagem de fundo

  // Define o conteúdo HTML da div
  div.innerHTML = `
    <div class = "iten-text">
    <button class="delete-self">X</button>
    <h4>${Book.author}</h4>
    <h3>${Book.title}</h3>
    <span>Páginas: ${Book.PageNum}</span>
    <p>${Book.Description}</p>
    <button style="padding: 10px; border: none; margin-bottom: 10px" class="not-read"></button>
    </div>
  `;
  ItenList.appendChild(div); // Adiciona a div à lista de itens da biblioteca

  // Seleciona os botões de deleção e leitura dentro da div recém-criada
  const deleteBtn = div.querySelector(".delete-self");
  const readBtn = div.querySelector(".not-read");

  // Adiciona evento de clique ao botão de leitura para alternar a classe "read"
  readBtn.addEventListener("click", () => {
    readBtn.classList.toggle("read");
  });

  // Adiciona evento de clique ao botão de deleção para remover o livro da lista
  deleteBtn.addEventListener("click", () => {
    div.remove(); // Remove o próprio elemento div (representando o livro)
  });
}

// Seleciona o botão de confirmação do formulário
const confirmBtn = document.querySelector("#confirmBtn");

// Adiciona evento de clique ao botão de confirmação do formulário
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevenir o comportamento padrão do formulário
  // Seleciona os inputs do formulário
  const AuthorInput = document.querySelector("#Author"); 
  const TitleInput = document.querySelector("#title"); 
  const PageInput = document.querySelector("#Pages"); 
  const DescriptionInput = document.querySelector("#desc");
  const BackGroundInput = document.querySelector("#back");

  // Cria um objeto representando o livro com os valores dos inputs
  const Book = {
    author: AuthorInput.value,
    title: TitleInput.value,
    PageNum: PageInput.value,
    Description: DescriptionInput.value,
    BackGround: BackGroundInput.value
  };

  addBookToLibrary(Book); // Adiciona o livro à biblioteca
});

// Adiciona evento de rolagem da janela para chamar a função "myFunction"
window.onscroll = function() {
  myFunction();
};

// Função para adicionar a classe "sticky" ao cabeçalho quando o usuário rolar a página
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
