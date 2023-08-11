function toggleMode() {
  const html = document.documentElement //Todos os elementos dentro da tag html
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Albervan para perfil com expressão sorrindo sem usar barba, com um cabdelabro ilumidando ao fundo."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Albervan para perfil com expressão séria usando barba."
    )
  }

  //condição do ligth alterar a imagem
}
