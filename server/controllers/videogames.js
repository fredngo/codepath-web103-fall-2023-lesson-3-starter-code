import Videogame from '../models/videogame.js'

// get all video games from the database
const getVideoGames = async (req, res) => {
  try {
    const results = await Videogame.findAll()
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get video games by ID from the database
const getVideoGamesById = async (req, res) => {
  try {
    const results = await Videogame.findOne(req.params.id)
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get video games by platform from the database
const getVideoGamesByPlatform = async (req, res) => {
  try {
    const results = await Videogame.findAll(req.params.platform)
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export default {
  getVideoGames,
  getVideoGamesById,
  getVideoGamesByPlatform
}
