import { request } from '../utilities/api'

const gamesURL = '/api/videogames'

const getAllVideoGames = () => request('GET', gamesURL)
const getVideoGameById = (id) => request('GET', `${gamesURL}/${id}`)
const getVideoGamesByPlatform = (platform) => request('GET', `${gamesURL}/platform/${platform}`)

export default {
    getAllVideoGames,
    getVideoGameById,
    getVideoGamesByPlatform
}