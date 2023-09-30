import { useState, useEffect } from 'react'
import Card from '../components/Card'
import VideoGamesAPI from '../services/videogamesapi'

const Games = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await VideoGamesAPI.getAllVideoGames()
                setGames(data)
            } catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <main>
            {
                games && games.length > 0 ? games.map((game) => 
                    <Card key={game.id} game={game} />
                ) : <h3>{'No video games found 😔'}</h3>
            }
        </main>
    )
}

export default Games
