function loadSidebar() {

const sidebar = `

<aside class="sidebar">

    <div class="profile-section">

        <img
        src="../assets/images/profile/profile.jpg"
        class="sidebar-profile">

        <h3>Sudipto Bairagi</h3>

        <p>AI • ML • Research</p>

    </div>

    <nav>

        <a href="../index.html">
            Dashboard
        </a>

        <a href="academics.html">
            Academics
        </a>

        <a href="portfolio.html">
            Portfolio
        </a>

        <a href="achievements.html">
            Achievements
        </a>

        <a href="certificates.html">
            Certificates
        </a>

        <a href="insights.html">
            Insights
        </a>

        <a href="contact.html">
            Contact
        </a>

    </nav>

</aside>

`;

document.getElementById(
"sidebar-container"
).innerHTML = sidebar;

/* ACTIVE PAGE */

const links =
document.querySelectorAll(
".sidebar a"
);

links.forEach(link=>{

if(
link.href ===
window.location.href
){
link.classList.add(
"active"
);
}

});

}

loadSidebar();