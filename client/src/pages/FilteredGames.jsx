import { useState, useEffect } from 'react'
import Card from '../components/Card'
import VideoGamesAPI from '../services/videogamesapi'
import { useParams } from 'react-router-dom'

const FilteredGames = () => {

    const { platform } = useParams()
    const [games, setGames] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await VideoGamesAPI.getVideoGamesByPlatform(platform)
                setGames(data)
            } catch (error) {
                throw error
            }
        }) ()
    }, [platform])

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

export default FilteredGames
