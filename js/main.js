document.addEventListener("DOMContentLoaded", () => {
  const username = "recent";
  const projectsContainer = document.getElementById("projects");

  const project = document.createElement("div");
  project.classList.add("project");

  project.innerHTML = `
    <img src="img/logo.png" alt="red-mat6tube-com">
                    <h3>Mat6Tube</h3>
                    <p>Данный раздел сайта может содержать информацию, предназначенную для лиц, достигших 18 лет. Чтобы продолжить, подтвердите достижение данного возраста.</p>
                    <a href="https://red.mat6tube.com/recent" target="_blank">View on GitHub</a>`;
  projectsContainer.appendChild(project);
});
