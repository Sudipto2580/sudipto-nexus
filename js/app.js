let roles = [];
let currentRole = 0;

async function loadProfile() {

const response =
    await fetch("data/profile.json");

const profile =
    await response.json();

const image =
document.getElementById(
"profileImage"
);

if(image){

image.src =
profile.profileImage;

}

// Hero Section

document.getElementById(
    "profileName"
).textContent =
    profile.name;

document.getElementById(
    "profileDescription"
).textContent =
    profile.description;

// Stats

document.getElementById(
    "cgpaValue"
).textContent =
    profile.cgpa;

document.getElementById(
    "semesterValue"
).textContent =
    profile.semester;

// Sidebar

document.getElementById(
    "sidebarCgpa"
).textContent =
    profile.cgpa;

document.getElementById(
    "sidebarSemester"
).textContent =
    profile.semester;

// Academic Overview

document.getElementById(
    "collegeValue"
).textContent =
    profile.college;

document.getElementById(
    "branchValue"
).textContent =
    profile.branch;

document.getElementById(
    "batchValue"
).textContent =
    profile.batch;

document.getElementById(
    "academicCgpaValue"
).textContent =
    profile.cgpa;

// Skills

const skillsGrid =
    document.getElementById(
        "skillsGrid"
    );

skillsGrid.innerHTML = "";

profile.skills.forEach(skill => {

    const skillCard =
        document.createElement("div");

    skillCard.className =
        "skill-card";

    skillCard.textContent =
        skill;

    skillsGrid.appendChild(
        skillCard
    );

});

document.getElementById(
    "skillsCount"
).textContent =
    profile.skills.length;

roles = profile.roles;

startTyping();


}

async function loadProjects() {

const response =
    await fetch(
        "data/projects.json"
    );

const projects =
    await response.json();

document.getElementById(
    "projectsCount"
).textContent =
    projects.length;

const projectsGrid =
    document.getElementById(
        "projectsGrid"
    );

projectsGrid.innerHTML = "";

projects.forEach(project => {

    const card =
        document.createElement(
            "div"
        );

    card.className =
        "project-card";

card.innerHTML = `
    <div class="project-content">
    <div class="project-image"></div>
    <h3>${project.title}</h3>                            
    <p>${project.description}</p>
    </div> 
    `;
    projectsGrid.appendChild(
        card
    );

});

}

function startTyping() {

if (
    roles.length === 0
) return;

document.getElementById(
    "typing-text"
).textContent =
    roles[currentRole];

currentRole++;

if (
    currentRole >=
    roles.length
) {
    currentRole = 0;
}

setTimeout(
    startTyping,
    2500
);

}

async function loadResearch() {

    const response =
        await fetch(
            "data/research.json"
        );

    const research =
        await response.json();

    const grid =
        document.getElementById(
            "researchGrid"
        );

    if(!grid) return;

    grid.innerHTML = "";

    research.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "research-card";

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;

        grid.appendChild(card);

    });

}

async function loadTimeline() {

    const response =
        await fetch(
            "data/timeline.json"
        );

    const timeline =
        await response.json();

    const grid =
        document.getElementById(
            "timelineGrid"
        );

    if(!grid) return;

    timeline.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "timeline-card";

        card.innerHTML = `
            <h3>${item.year}</h3>
            <p>${item.title}</p>
        `;

        grid.appendChild(card);

    });

}

async function loadSocials() {

    const response =
        await fetch(
            "data/socials.json"
        );

    const socials =
        await response.json();

    const grid =
        document.getElementById(
            "socialGrid"
        );

    if(!grid) return;

    grid.innerHTML = `

        <div class="social-card">
            GitHub
            <br>
            ${socials.github}
        </div>

        <div class="social-card">
            LinkedIn
            <br>
            ${socials.linkedin}
        </div>

        <div class="social-card">
            Email
            <br>
            ${socials.email}
        </div>

    `;

}
async function loadCertificatesPreview() {

    const response =
        await fetch(
            "data/certificates.json"
        );

    const certificates =
        await response.json();
        document.getElementById(
        "certificateCount"
        ).textContent =
        certificates.length;

    const grid =
        document.getElementById(
            "latestCertificates"
        );

    if(!grid) return;

    certificates.slice(0,3)
    .forEach(cert => {

        const card =
            document.createElement("div");

        card.className =
            "certificate-card";

        card.innerHTML = `
            <h3>${cert.name}</h3>
            <p>${cert.issuer}</p>
            <span>${cert.year}</span>
        `;

        grid.appendChild(card);


    });

}

async function loadAchievementsPreview() {

    const response =
        await fetch(
            "data/achievements.json"
        );

    const achievements =
        await response.json();
        document.getElementById(
        "achievementCount"
        ).textContent =
        achievements.length;

    const grid =
        document.getElementById(
            "latestAchievements"
        );

    if(!grid) return;

    achievements.slice(0,3)
    .forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "achievement-card";

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;

        grid.appendChild(card);

    });

}

function loadAcademicProgress() {

    const progress =
        document.getElementById(
            "degreeProgress"
        );

    if(!progress) return;

    progress.style.width =
        "37.5%";

}

loadResearch();
loadTimeline();
loadSocials();
loadProfile();
loadProjects();
loadCertificatesPreview();
loadAchievementsPreview();
loadAcademicProgress();