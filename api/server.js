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
    return res.status(400).json({ error: 'City is required' })
  }

  try {
    const fetch = await import('node-fetch')
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const data = await response.json()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data'})
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
