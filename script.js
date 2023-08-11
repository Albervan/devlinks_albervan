function toggleMode() {
  const html = document.documentElement //Todos os elementos dentro da tag html

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}
