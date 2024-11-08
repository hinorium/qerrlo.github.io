// document.addEventListener("DOMContentLoaded", () => {
//   const username = "recent";
//   const projectsContainer = document.getElementById("projects");

//   fetch(`https://red.mat6tube.com/${username}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const project = document.createElement("div");
//       project.classList.add("project");

//       project.innerHTML = `
//         <img src="assets/logo.png" alt="Project Logo">
//         <h3>${data.name || "Название проекта"}</h3>
//         <p>${data.description || "Нет описания"}</p>
//         <a href="https://red.mat6tube.com/recent" target="_blank">Перейти на red.mat6tube.com/recent</a>
//       `;

//       projectsContainer.appendChild(project);
//     })
//     .catch((error) =>
//       console.error("Error fetching repository data:", error)
//     );
// });
