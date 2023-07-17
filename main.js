
let pageNumber = 1;

DBService.getBreweries(pageNumber)
.then(breweries => render(breweries))



// function render(breweries) {
//         const breweriesContainer = document.getElementById('breweries-container');
//         breweriesContainer.innerHTML = ''; // Clear the existing breweries
      
//         breweries.forEach(brewery => {
//           const breweryElement = document.createElement('div');
//           breweryElement.textContent = brewery.name;
//           breweriesContainer.appendChild(breweryElement);
//         });
    //  }

     function render(breweries) {
        const breweriesList = document.querySelector('.breweries-list');
      
        // Clear the existing content
        breweriesList.innerHTML = '';
      
        // Generate card for each brewery
        breweries.forEach(brewery => {
          const card = document.createElement('div');
          card.classList.add('brewery-card');
      
          // Add brewery content to the card
          card.innerHTML = `
            <h3>${brewery.name}</h3>
            <p>${brewery.description}</p>
            <!-- Add more brewery details as needed -->
          `;
      
          // Append the card to the breweries list
          breweriesList.appendChild(card);
        });
      }




function previous() {
    pageNumber--;
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries))
}

function next(){
    pageNumber++;
    DBService.getBreweries(pageNumber)
    .then(breweries => render(breweries))

}


//displaiare le informazioni delle birrerie nella maniera più cool possibile