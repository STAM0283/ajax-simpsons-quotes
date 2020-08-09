function fetchPokemonJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; 
      })
      .then(function(item) {
        console.log('data decoded from JSON:', item);
  
        const simpsonHtml = `
          <p><strong>${item.quote}</strong></p>
          <p><strong>${item.character}</strong></p>         
          <img src="${item.image}" />
        `;
        document.querySelector('.container').innerHTML = simpsonHtml;
      });
  }
  
  fetchPokemonJSON();

  // [
  //   {
  //   "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  //   "character": "Apu Nahasapeemapetilon",
  //   "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  //   "characterDirection": "Left"
  //   }
  // ]
