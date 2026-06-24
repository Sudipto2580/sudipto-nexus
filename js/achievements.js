async function loadAchievements(){

    const response =
    await fetch(
    "../data/achievements.json"
    );

    const achievements =
    await response.json();

    document.getElementById(
    "achievementCount"
    ).textContent =
    achievements.length;

    const grid =
    document.getElementById(
    "achievementGrid"
    );

    grid.innerHTML = "";

    achievements.forEach(item => {

        const card =
        document.createElement(
        "div"
        );

        card.className =
        "achievement-card";

        card.innerHTML = `

            <div class="year">

            ${item.year}

            </div>

            <h3>

            ${item.title}

            </h3>

            <p>

            ${item.description}

            </p>

            <div class="category">

            ${item.category}

            </div>

        `;

        grid.appendChild(
        card
        );

    });

}

loadAchievements();