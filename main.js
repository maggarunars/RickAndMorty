"use strict";
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json) => {
    console.log(json);
    //Here is the code for "How many episodes is each character in?" and
    //Here I checked which characters are human and which are alien
    json.results.forEach(function (character) {
        const episodeCount = character.episode.length;
        console.log(character.name + " is in " + episodeCount + " episodes.");
        const aliensVsHumans = character.species;
        console.log(character.name + " is " + aliensVsHumans);
        //Here I added images...
        const imageElement = document.querySelector("#pictures");
        imageElement.innerHTML += '<img src=' + character.image + ' alt="Images of Rick and Morty characters">';
    });
});
