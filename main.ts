type Info = {         //lýsing
  count: number,
  next: string | null,
  pages: number,
  prev: string | null,
}
type Character = {
  created: string,
  episode: string[],
  gender: string,
  id: number,
  image: string,
  location: {
    name: string,
    url: string,
  },
  name: string,
  origin: {
    name: string,
    url: string,
  },
  species: string,
  status: string,
  type: string,
  url: string,
}
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json:{info:Info, results:Character[] }) => {

console.log(json);

//Here is the code for "How many episodes is each character in?" and

//Here I checked which characters are human and which are alien

json.results.forEach(function(character: Character) {
  const episodeCount = character.episode.length;
  console.log(character.name + " is in " + episodeCount + " episodes." );
  const aliensVsHumans = character.species;
  console.log(character.name + " is " + aliensVsHumans );

//Here I added images...

const imageElement = document.querySelector("#pictures") as HTMLElement; 
imageElement.innerHTML += '<img src=' +character.image + ' alt="Images of Rick and Morty characters">'
});

});
