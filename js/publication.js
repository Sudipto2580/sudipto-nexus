async function loadPublications(){

    const response =
    await fetch(
    "../data/publications.json"
    );

    const publications =
    await response.json();

    const grid =
    document.getElementById(
    "publicationGrid"
    );

    if(publications.length === 0){

        grid.innerHTML =
        "<h2>No Publications Added Yet</h2>";

        return;
    }

}