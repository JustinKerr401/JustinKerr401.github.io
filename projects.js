//   ----------------------   Necessary variables
const project_selector = document.getElementById("project_selector");
let sections = [] 

//   ----------------------   Synchronous tasks
addElements()
updateDisplays(2)

//   ----------------------   Asynchronous tasks
project_selector.addEventListener("mouseover", () => {
    project_selector.classList.remove("hidden")
    project_selector.classList.add("visible")
});

project_selector.addEventListener("mouseout", () => {
    project_selector.classList.remove("visible")
    project_selector.classList.add("hidden")
});

project_selector.addEventListener("click", updateDisplays)

//   ----------------------   Functions 

function addElements(){
    const openers = document.querySelectorAll(".opener")
    //For every project, add a representation of that object to the project selector
    for (let opener of openers){
        //Create the elements to be added
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("section_marker")
        const label = document.createElement("label")
        label.textContent = opener.textContent
        const br = document.createElement("br")
        project_selector.appendChild(checkbox)
        project_selector.appendChild(label)
        project_selector.appendChild(br)
    }
}

function updateDisplays(allowedChecks){
    const sections = document.querySelectorAll("section")
    const header = document.querySelectorAll(".autoAdded")
    const checkboxes = document.querySelectorAll(".section_marker")
    let checkNum = 0
    for (let x=0; x<sections.length; x++){
        if (x<allowedChecks){
            checkboxes[x].checked = true
        }

        if (checkboxes[x].checked){
            sections[x].style.display = "inline-block"
            sections[x].classList.remove(colorClass(checkNum+1))
            sections[x].classList.add(colorClass(checkNum))
            header[x].style.display = "inline-block"
            checkNum++
        } else {
            sections[x].style.display = "none"
            header[x].style.display = "none"
        }
    }
}

function colorClass(value){
    if (value % 2 == 0){
        return "blue"
    } else {
        return "green"
    }
}