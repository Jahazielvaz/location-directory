const citiesArray = [];
let userInput = document.getElementById('user-input');
let results = document.getElementById('results');

const citiesData = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

fetch(citiesData)
  .then(response => response.json())
  .then(data => citiesArray.push(...data))
  .catch(error => console.error(error))


  let findMatches = (wordToMatch, citiesArray) => {
    return citiesArray.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi'); // This is called the RegExp constructor.
      return place.city.match(regex) || place.state.match(regex)
    })
  }


function displayMatches(){
  const matchArray = findMatches(this.value, citiesArray)
  const html = matchArray.map(place => {
    return `
        <li>
          <span class="name">${place.city} ${place.state}</span>
          <span class="population">${place.population}</span>
        </li>
      `
  })
}

userInput.addEventListener('keyup', displayMatches)
