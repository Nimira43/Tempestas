import { fetchWeather } from './weatherApi.js'

document.addEventListener('DOMContentLoaded', () => {
  const weatherForm = document.getElementById('weather-form')
  const cityInput = document.getElementById('city-input')
  const weatherResult = document.getElementById('weather-result')
  const favouritesList = document.getElementById('favourites-list')

  class WeatherApp {
    constructor() {
      this.favourites = new Set(savedFavourites)
      this.renderFavourites()
    }

    async handleSearch(event) {
    }

    displayWeather(data) {
      const { name, weather, main } = data
      weatherResult.innerHTML = `
        <h3>${name}</h3>
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}K</p>
        <button onclick="weatherApp.addFavourite('${name}')">Add to Favourites</button>
      `
    }

    addFavourite(city) {
    }

    removeFavourite(city) {
    }

    // update local storage
    
    renderFavourites() {
      favouritesList.innerHTML = ''
      this.favourites.forEach(city => {
        const li = document.createElement('li')
        li.className = 'favourite-item'
        li.innerHTML = `
          ${city}
          <button onclick='weatherApp.removeFavourite('${city}')'>Remove</button>
          <button onclick='weatherApp.handleSearch(event, '${city}')'>View</button>
        `
        favouritesList.appendChild(li)
      })
    }

    handleSearch(event, city) {
      if (event) event.preventDefault()
        cityInput.value = city
        this.fetchAndDisplayWeather(city)
    }

    async fetchAndDisplayWeather(city) {
      try {
        const weatherData = await fetchWeather(city)
        this.displayWeather(weatherData)
      } catch (error) {
        console.error(error)
        weatherResult.textContent = 'Failed to fetch weather data.'
      }
    }
  }

  window.weatherApp = new WeatherApp()
  weatherForm.addEventListener('submit', event => weatherApp.handleSearch(event))
})