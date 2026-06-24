async function loadExperience(){

    const response =
    await fetch(
    "../data/experience.json"
    );

    const experience =
    await response.json();

    const grid =
    document.getElementById(
    "experienceGrid"
    );

    if(experience.length === 0){

        grid.innerHTML =
        "<h2>No Experience Added Yet</h2>";

        return;
    }

}