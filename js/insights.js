async function loadInsights() {
    const profileResponse = await fetch("../data/profile.json");
    const profile = await profileResponse.json();

    const projectResponse = await fetch("../data/projects.json");
    const projects = await projectResponse.json();

    const achievementResponse = await fetch("../data/achievements.json");
    const achievements = await achievementResponse.json();

    const certificateResponse = await fetch("../data/certificates.json");
    const certificates = await certificateResponse.json();

    document.getElementById("cgpaCard").textContent = profile.cgpa;
    document.getElementById("projectCard").textContent = projects.length;
    document.getElementById("certificateCard").textContent = certificates.length;
    document.getElementById("achievementCard").textContent = achievements.length;

    const skillsAnalytics = document.getElementById("skillsAnalytics");
    skillsAnalytics.innerHTML = "";

    (profile.skills || []).forEach(skill => {
        const card = document.createElement("div");
        card.className = "analytics-card";
        card.innerHTML = `<h3>${skill}</h3>`;
        skillsAnalytics.appendChild(card);
    });

    const projectAnalytics = document.getElementById("projectAnalytics");
    projectAnalytics.innerHTML = "";

    (projects || []).forEach(project => {
        const card = document.createElement("div");
        card.className = "analytics-card";
        card.innerHTML = `\n            <h3>${project.title}</h3>\n            <p>${project.status || ''}</p>\n        `;
        projectAnalytics.appendChild(card);
    });
}

loadInsights();
