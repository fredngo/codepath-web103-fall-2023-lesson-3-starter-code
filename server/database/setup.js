const { pool } = require('../config/database.js')
const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf8')

const createVideoGamesTable = async () => {
    try {
        const createTableQuery = `
            DROP TABLE IF EXISTS videogames;
            CREATE TABLE IF NOT EXISTS videogames (
                id INT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                genre VARCHAR(255) NOT NULL,
                platform VARCHAR(255) NOT NULL,
                imageURL VARCHAR(255) NOT NULL
            )
        `
        await pool.query(createTableQuery)
    } catch (error) {
        console.log(error)
    }
}

const insertVideoGames = async () => {
    try {
        const insertQuery = `
            INSERT INTO videogames (id, title, genre, platform, imageURL)
            VALUES ($1, $2, $3, $4, $5)
        `

        const videoGames = JSON.parse(data)

        for (let videoGame of videoGames) {
            const values = [
                videoGame.id,
                videoGame.title,
                videoGame.genre,
                videoGame.platform,
                videoGame.imageURL
            ]
            
            await pool.query(insertQuery, values)
            console.log(`✅ added ${videoGame.title}`)
        }
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await createVideoGamesTable()
    await insertVideoGames()
}

module.exports = {
    createVideoGamesTable,
    insertVideoGames,
    setup
}