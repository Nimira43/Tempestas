const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const API_KEY = process.env.API_KEY

app.use(cors())

app.get('/weather', async (req, res) => {
  const city = req.query.city
  if (!city) {
    console.error('City parameter is missing')
    return res.status(400).json({ error: 'City is required' })
  }

  try {
    const { default: fetch } = await import('node-fetch')
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)

    if (!response.ok) { 
      throw new Error(`OpenWeatherMap API response: ${response.statusText}`); 
    }
    
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error('Error fetching weather data:', error.message)
    res.status(500).json({ error: 'Failed to fetch weather data'})
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
