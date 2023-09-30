import { useRoutes } from 'react-router-dom'
import NavBar from './components/NavBar'
import AllGames from './pages/AllGames'
import FilteredGames from './pages/FilteredGames'
import GameDetails from './pages/GameDetails'

const App = () => {
    let element = useRoutes([
        {
            path: '/',
            element: <AllGames />
        },
        {
            path: '/platform/:platform',
            element: <FilteredGames />
        },
        {
            path: '/game/:id',
            element: <GameDetails />
        }
    ])

    return (
        <div className='app-main'>
            <header>
                <NavBar />
            </header>

            {element}
        </div>
    )
}

export default App
