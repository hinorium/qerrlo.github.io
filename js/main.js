document.addEventListener("DOMContentLoaded", () => {
  const username = "luau";
  const repoNames = [
    "UniversalSynSaveInstance",
    "Executor-API-Docs",
    "Dex",
    "SomeHub",
  ];
  const projectsContainer = document.getElementById("projects");

  repoNames.forEach((repo) => {
    fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const project = document.createElement("div");
        project.classList.add("project");

        project.innerHTML = `
                    <img src="img/logo.png" alt="${data.name}">
                    <h3>${data.name}</h3>
                    <p>${data.description || "No Description"}</p>
                    <a href="${
                      data.html_url
                    }" target="_blank">View on GitHub</a>
                `;

        projectsContainer.appendChild(project);
      })
      .catch((error) =>
        console.error("Error fetching repository data:", error)
      );
  });
});
