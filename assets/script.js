const toggleButton = document.getElementsByClassName('toggle-button')[0]
const link = document.getElementsByClassName("link")[0]
const copyright = document.getElementsByClassName("copyright")[0]

var Year = new Date().getFullYear()

copyright.innerHTML = "© " + Year + " by Daniele Petricone."

toggleButton.addEventListener('click', () =>{
    link.classList.toggle("active")
})

