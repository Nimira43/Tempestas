export async function fetchWeather(city) {
  const response = await fetch(`http://localhost:3000/weather?city=${city}`)
  if (!response.ok) {
    throw new Error('Failed to fetch weather data')
  }
  const data = await response.json()
  return data
}
