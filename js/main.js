document.addEventListener("DOMContentLoaded", () => {
  const username = "recent";
  const projectsContainer = document.getElementById("projects");

  const project = document.createElement("div");
  project.classList.add("project");

  project.innerHTML = `
    <img src="img/logo.png" alt="ya eby?">
                    <h3>Mat6tube</h3>
                    <p>"No Description"}</p>
                    <a href="red.mat6tube.com/recent
                    }" target="_blank">View on GitHub</a>
                `;
  projectsContainer.appendChild(project);
});
