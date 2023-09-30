import { pool } from '../config/database.js'

// get all video games from the database
const getVideoGames = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM videogames ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

// get video games by ID from the database
const getVideoGamesById = async (req, res) => {
  try {
    const gameId = req.params.id
    const results = await pool.query('SELECT * FROM videogames WHERE id = $1', [gameId])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

// get video games by platform from the database
const getVideoGamesByPlatform = async (req, res) => {
  try {
    const gamePlatform = req.params.platform
    const results = await pool.query('SELECT * FROM videogames WHERE platform = $1', [gamePlatform])
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

export default {
  getVideoGames,
  getVideoGamesById,
  getVideoGamesByPlatform
}
