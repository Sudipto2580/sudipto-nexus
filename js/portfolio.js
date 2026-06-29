async function loadProjects() {

    const response =
        await fetch(
            "../data/projects.json"
        );

    const projects =
        await response.json();

    document.getElementById(
        "projectCount"
    ).textContent =
        projects.length;

    const grid =
        document.getElementById(
            "projectsGrid"
        );

    grid.innerHTML = "";

    projects.forEach(project => {

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "project-card";

        card.innerHTML = `

        <img
        src="../${project.image}"
        class="project-thumbnail"
        onerror="this.style.display='none'">

        <h2>${project.title}</h2>

        <p>${project.description}</p>

       <details class="tech-details">

        <summary>

        ▶ Technologies Used

        </summary>

        <div class="tech-stack">

        ${project.technologies
        .map(tech=>`
        <span class="tech">
        ${tech}
        </span>
        `)
        .join("")}

        </div>

        </details>

        <div class="project-links">

        <a
        href="${project.github}"
        target="_blank"
        class="github-btn">

        GitHub →

        </a>

        </div>

        `;

        grid.appendChild(
            card
        );

    });

}

loadProjects();