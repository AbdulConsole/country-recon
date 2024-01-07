    // Declare Var
    let api = "https://restcountries.com/v3.1/name/";

    // Grab the DOMs
    const cityInput = document.getElementById('cityInput').value;
    const resultContainer = document.getElementById('resultContainer');
    const warningMessage = document.getElementById('warningMessage');
    const countryNameElement = document.querySelector("[data-name]");
    const capitalElement = document.querySelector("[data-capital]");
    const populationElement = document.querySelector("[data-population]");
    const currencyElement = document.querySelector("[data-currency]");
    const regionElement = document.querySelector("[data-region]");
    const subRegionElement = document.querySelector("[data-sub-region]");
    const flag = document.querySelector("[data-flag]");
    const form = document.getElementById('cityForm');


    form.addEventListener('submit', function (event) { event.preventDefault(); submitForm(event); });



function submitForm(event) {
    event.preventDefault();
    if (cityInput.trim() !== '') {
        fetch(api + cityInput).then((response) => {
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

        // Show result container and hide warning message
        resultContainer.style.display = 'block';
        warningMessage.style.display = 'none';


    } else {
        // Show warning message and hide result container
        resultContainer.style.display = 'none';
        warningMessage.style.display = 'block';
    }
}
