import express from 'express'

import VideogamesController from '../controllers/videogames.js'

const router = express.Router()

// routes to get all video games, video games by ID, and video games by platform
router.get('/videogames', VideogamesController.getVideoGames)
router.get('/videogames/:id', VideogamesController.getVideoGamesById)
router.get('/videogames/platform/:platform', VideogamesController.getVideoGamesByPlatform)

export default router
