const apiKey = '47668410fbe0b7e71e30603aaa6cafb4';

const cityForm = document.getElementById('cityForm');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const tempMinElement = document.getElementById('tempMin');
const tempMaxElement = document.getElementById('tempMax');

cityForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const cityName = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const tempMin = data.main.temp_min;
            const tempMax = data.main.temp_max;

            temperatureElement.textContent = `Temperatura em ${cityName}: ${temperature}°C`;
            descriptionElement.textContent = `Descrição do tempo: ${description}`;
            humidityElement.textContent = `Umidade: ${humidity}%`;
            tempMinElement.textContent = `Temp. Mínima: ${tempMin}°C`;
            tempMaxElement.textContent = `Temp. Máxima: ${tempMax}°C`;
        })
        .catch(error => {
            temperatureElement.textContent = 'Erro ao carregar os dados da API.';
            console.error('Erro ao carregar os dados da API:', error);
        });
});
