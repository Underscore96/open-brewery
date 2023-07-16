
let pageNumber = 1;

DBService.getBreweries(pageNumber)
.then(breweries => render(breweries))



function render(breweries) {
        const breweriesContainer = document.getElementById('breweries-container');
        breweriesContainer.innerHTML = ''; // Clear the existing breweries
      
        breweries.forEach(brewery => {
          const breweryElement = document.createElement('div');
          breweryElement.textContent = brewery.name;
          breweriesContainer.appendChild(breweryElement);
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