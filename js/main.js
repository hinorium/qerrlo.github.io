document.addEventListener("DOMContentLoaded", () => {
  const username = "recent";
  const projectsContainer = document.getElementById("projects");

  const project = document.createElement("div");
  project.classList.add("project");

  project.innerHTML = `
    <img src="assets/logo.png" alt="red">
                    <h3>Mat6Tube</h3>
                    <p>Данный сайт предназначен для лиц, достигших 18 лет.</p>
                    <a href="https://red.mat6tube.com/recent" target="_blank">Перейти на сайт</a>`;
  projectsContainer.appendChild(project);

  project.classList.add("project");
    project.innerHTML = `
    <img src="assets/logo.png" alt="red">
                    <h3>Noodlemagazine</h3>
                    <p>Данный сайт предназначен для лиц, достигших 18 лет.</p>
                    <a href="https://adult.noodlemagazine.com/new-video" target="_blank">Перейти на сайт</a>`;
  projectsContainer.appendChild(project);
});
