async function loadContacts() {

    const response =
        await fetch(
            "../data/socials.json"
        );

    const socials =
        await response.json();

    const grid =
        document.getElementById(
            "contactGrid"
        );

    grid.innerHTML = `

    <div class="contact-card">
        <h3>
        <i class="fas fa-envelope"></i>
        Email
        </h3>
        <a href="mailto:${socials["personal-email"]}">
        ${socials["personal-email"]}
        </a>

    </div>

    <div class="contact-card">
        <h3>
        <i class="fas fa-envelope"></i>
        College Email</h3>

        <a href="mailto:${socials["college-email"]}">
        ${socials["college-email"]}
        </a>

    </div>

    <div class="contact-card">
        <h3>
        <i class="fab fa-github"></i>
        GitHub
        </h3>

        <a href="${socials.github}"
        target="_blank">
        Github Profile
        </a>

    </div>

    <div class="contact-card">
        <h3>
        <i class="fab fa-linkedin"></i>
        LinkedIn
        </h3>

        <a href="${socials.linkedin}"
        target="_blank">
        LinkedIn Profile
        </a>

    </div>

    <div class="contact-card">

        <h3>
        <i class="fas fa-phone"></i>
        Phone
        </h3>

        <a href="tel:+919635184226">
    +91 9635184226
        </a>
        <br>
        <a href="tel:+8801610302540">
            +88 01610302540
        </a>
        <br>
        <a href="tel:+8801715818438">
            +88 01715818438
        </a>

            </div>

        `;

        }

loadContacts();
