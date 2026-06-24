async function loadCertificates() {

    try {

        const response =
            await fetch(
                "../data/certificates.json"
            );

        const certificates =
            await response.json();

        document.getElementById(
            "certificateCount"
        ).textContent =
            certificates.length;

        const grid =
            document.getElementById(
                "certificateGrid"
            );

        grid.innerHTML = "";

        certificates.forEach(cert => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "certificate-card";

            card.innerHTML = `

                <div class="issuer">
                    ${cert.issuer}
                </div>

                <h3>
                    ${cert.name}
                </h3>

                <div class="year">
                    ${cert.year}
                </div>

                <div class="certificate-links">

                    <a href="../assets/pdf/certificates/${cert.pdf}"
                       target="_blank">

                        View Certificate →

                    </a>

                </div>

            `;

            grid.appendChild(card);

        });

    }

    catch(error) {

        console.error(
            "Certificate Error:",
            error
        );

    }

}

loadCertificates();