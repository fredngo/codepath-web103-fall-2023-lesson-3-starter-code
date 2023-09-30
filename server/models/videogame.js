import pool from '../config/database.js'

const findAll = async (platform) => {
  if (platform) {
    const query = 'SELECT * FROM videogames WHERE platform = $1 ORDER BY title ASC'
    return pool.query(query, [platform])
  }
  else {
    const query = 'SELECT * FROM videogames ORDER BY title ASC'
    return pool.query(query)
  }
}

const findOne = async (id) => {
  return pool.query('SELECT * FROM videogames WHERE id = $1', [id])
}

export default {
  findAll,
  findOne
}
