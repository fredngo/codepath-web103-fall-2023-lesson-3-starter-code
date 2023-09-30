import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VideoGamesAPI from '../services/videogamesapi'

const GameDetails = () => {

    const { id } = useParams()
    const [game, setGame] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await VideoGamesAPI.getVideoGameById(id)
                setGame(data)
            } catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <div className='game-details'>
            <h2>{game.title}</h2>
            <p>{game.genre} | {game.platform}</p>
            <img src={game.imageurl} alt={game.title} />
        </div>
    )
}

export default GameDetails
