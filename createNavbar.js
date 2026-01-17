
const navbar = document.getElementById("navbar")
const daSections = document.querySelectorAll("section")
const openers = document.querySelectorAll(".opener")

for (let x=0; x<daSections.length; x++){
    const hlink = document.createElement("a")
    hlink.classList.add("box", "autoAdded")
    hlink.href = `#${daSections[x].id}`
    if (openers[x].textContent == "Hello! Welcome to my portfolio website."){
        hlink.textContent = "Top"
    } else {
        hlink.textContent = openers[x].textContent
    }
    navbar.appendChild(hlink)
}