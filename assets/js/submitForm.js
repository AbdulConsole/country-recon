function submitForm(event) {
    event.preventDefault();
    var CountryInput = document.getElementById('CountryInput').value;
    var resultContainer = document.getElementById('resultContainer');
    var warningMessage = document.getElementById('warningMessage');
    var countryNameElement = document.querySelector("[data-name]");
    var capitalElement = document.querySelector("[data-capital]");
    var populationElement = document.querySelector("[data-population]");
    var currencyElement = document.querySelector("[data-currency]");
    var regionElement = document.querySelector("[data-region]");
    var subRegionElement = document.querySelector("[data-sub-region]");
    const flag = document.querySelector("[data-flag]");

    if (CountryInput.trim() !== '') {
        // Show result container and hide warning message
        resultContainer.style.display = 'block';
        warningMessage.style.display = 'none';

        // Fetch country data based on city input
        let api = "https://restcountries.com/v3.1/name/";
        fetch(api + CountryInput).then((response) => {
            return response.json();
        }).then(([data]) => {
            if (data) {
                // Update DOM elements with country data
                flag.src = data.flags.svg;
                countryNameElement.textContent = data.name.official;
                capitalElement.textContent = data.capital;
                populationElement.textContent = data.population;
                currencyElement.textContent = Object.keys(data.currencies);
                regionElement.textContent = data.region;
                subRegionElement.textContent = data.subregion;
            } else {
                // Handle the case where no data is found for the entered city
                console.log('No data found for the entered city.');
            }
        }).catch((error) => {
            console.error('Error fetching country data:', error);
        });
    } else {
        // Show warning message and hide result container
        resultContainer.style.display = 'none';
        warningMessage.style.display = 'block';
    }
}

// function fetchCountryData(city) {
    
// }