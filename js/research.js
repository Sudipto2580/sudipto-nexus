async function loadResearch(){

    const response =
    await fetch(
    "../data/research.json"
    );

    const research =
    await response.json();

    const grid =
    document.getElementById(
    "researchGrid"
    );

    research.forEach(item=>{

        const card =
        document.createElement(
        "div"
        );

        card.className =
        "research-card";
        if(item.link){

        card.style.cursor =
        "pointer";

        card.addEventListener(
        "click",
        ()=>{

            window.open(
            item.link,
            "_blank"
            );

        });

        }

        card.innerHTML = `
        <h3>${item.title}</h3>

        <p>${item.description}</p>

        <div class="year">
        ${item.year}
        </div>

        ${
        item.link
        ?
        `<a href="${item.link}"
        target="_blank">
        View Research →
        </a>`
        :
        ""
        }
        `;

        grid.appendChild(card);

    });

}

async function loadTimeline(){

    const response =
    await fetch(
    "../data/timeline.json"
    );

    const timeline =
    await response.json();

    const grid =
    document.getElementById(
    "timelineGrid"
    );

    timeline.forEach(item=>{

        const card =
        document.createElement(
        "div"
        );

        card.className =
        "timeline-card";

        card.innerHTML = `
            <h3>${item.year}</h3>
            <p>${item.title}</p>
        `;

        grid.appendChild(card);

    });

}

loadResearch();
loadTimeline();