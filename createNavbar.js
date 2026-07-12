const navbar = document.getElementById("navbar")
const daSections = document.querySelectorAll("section")
const openers = document.querySelectorAll(".opener")

for (let x = 0; x < daSections.length; x++) {
    const hlink = document.createElement("a")
    hlink.classList.add("box", "autoAdded")
    hlink.href = `#${daSections[x].id}`

    const title = openers[x].childNodes[0].textContent.trim();

    if (title === "Hello! Welcome to my portfolio website.") {
        hlink.textContent = "Top"
    } else {
        hlink.textContent = title
    }

    navbar.appendChild(hlink)
}