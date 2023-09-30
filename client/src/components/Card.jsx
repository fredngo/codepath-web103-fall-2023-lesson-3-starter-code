const Card = ( { game } ) => {

    const gameURL = `/game/${game.id}`

    return (
        <article style={{background: `url(${game.imageurl}) no-repeat center center / cover`}}> 
            <a href={gameURL}><h2>{game.title}</h2></a>
            <p>{game.genre} 🎮 {game.platform}</p>
        </article>
    )
}

export default Card
