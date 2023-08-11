function toggleMode() {
  const html = document.documentElement //Todos os elementos dentro da tag html
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Albervan para perfil com express�o sorrindo sem usar barba, com um cabdelabro ilumidando ao fundo."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Albervan para perfil com express�o s�ria usando barba."
    )
  }

  //condi��o do ligth alterar a imagem
}
