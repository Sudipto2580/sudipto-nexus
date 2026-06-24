async function loadDashboard(){

    const profile =
    await fetch(
    "../data/profile.json"
    ).then(r=>r.json());

    const projects =
    await fetch(
    "../data/projects.json"
    ).then(r=>r.json());

    const certificates =
    await fetch(
    "../data/certificates.json"
    ).then(r=>r.json());

    const achievements =
    await fetch(
    "../data/achievements.json"
    ).then(r=>r.json());

    document.getElementById(
    "projectCount"
    ).textContent =
    projects.length;

    document.getElementById(
    "certificateCount"
    ).textContent =
    certificates.length;

    document.getElementById(
    "achievementCount"
    ).textContent =
    achievements.length;

    document.getElementById(
    "skillCount"
    ).textContent =
    profile.skills.length;

}

loadDashboard();