const inputEl = document.getElementById("color-input")
const changeBtn = document.getElementById("change-btn")
const container = document.getElementsByClassName("main-container")
let color = inputEl.value

changeBtn.addEventListener("click", function() {

  document.body.style.background = inputEl.value

})
