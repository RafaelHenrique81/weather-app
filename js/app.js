const cityForm = document.querySelector('[data-js="change-location"]')
const cityWeather = document.querySelector('[data-js="weather-details"]') 
const cityName = document.querySelector('[data-js="city-name"]') 
const cityWeatherDetail = document.querySelector('[data-js="city-weather"]') 
const cityTemperature = document.querySelector('[data-js="city-temperature"]') 


cityForm.addEventListener('submit', async event =>{
    event.preventDefault()

    const inputValue = event.target.city.value
    const [{ Key, LocalizedName }] = await getCityData(inputValue)
    const [{ WeatherText, Temperature}] = await getCityWeather(Key)

    cityName.textContent = LocalizedName
    cityWeatherDetail.textContent = WeatherText
    cityTemperature.textContent = Temperature.Metric.Value

    console.log(WeatherText, Temperature.Metric.Value)
    cityForm.reset()
})