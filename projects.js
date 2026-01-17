//   ----------------------   Necessary variables
const project_selector = document.getElementById("project_selector");
let height = project_selector.offsetHeight; // initial height of project selector

//   ----------------------   Synchronous tasks
hideElements()

//   ----------------------   Asynchronous tasks
project_selector.addEventListener("mouseover", () => {
    const components = document.querySelectorAll("#project_selector > *");
    components.forEach(component => {
        component.tagName === "INPUT" || component.tagName === "LABEL" ? component.style.display = "inline" : component.style.display = "block";
    });
});

project_selector.addEventListener("mouseout", hideElements);

project_selector.addEventListener("click", () => {

})

//   ----------------------   Functions 
function hideElements(){
    const components = document.querySelectorAll("#project_selector > *");
    components.forEach(component => {
        component.style.display = "none";
    });
    project_selector.style.height = `${height-20}px`;
}