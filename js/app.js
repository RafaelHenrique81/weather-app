const cityForm = document.querySelector('[data-js="change-location"]')
const cityWeather = document.querySelector('[data-js="weather-details"]') 
const cityName = document.querySelector('[data-js="city-name"]') 
const cityWeatherDetail = document.querySelector('[data-js="city-weather"]') 
const cityTemperature = document.querySelector('[data-js="city-temperature"]') 
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')

let timeImg = document.querySelector('[data-js="time"]')

const showCityCard = () => {
    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }
}

ShowCityWeatherInfo = async city => {
    const [{ Key, LocalizedName }] = await getCityData(city)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)
    const timeIconImg = `<img src="./src/icons/${WeatherIcon}.svg" />`

    timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
    timeIcon.innerHTML = timeIconImg
    cityName.textContent = LocalizedName
    cityWeatherDetail.textContent = WeatherText
    cityTemperature.textContent = Temperature.Metric.Value
}

cityForm.addEventListener('submit', event =>{
    event.preventDefault()

    const inputValue = event.target.city.value

    showCityCard()
    ShowCityWeatherInfo(inputValue)
    cityForm.reset()
})