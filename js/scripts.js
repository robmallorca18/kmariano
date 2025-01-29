function showDetails(projectName) {
    alert("You clicked on " + projectName);
}


function showProjectDetails(title, description) {
    document.getElementById("projectTitle").innerText = title;
    document.getElementById("projectDescription").innerText = description;
}
