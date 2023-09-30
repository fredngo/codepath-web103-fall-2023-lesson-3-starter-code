import pool from '../config/database.js'

const findAll = (platform) => {
  if (platform) {
    const query = 'SELECT * FROM videogames WHERE platform = $1 ORDER BY title ASC'
    return pool.query(query, [platform])
  }
  else {
    const query = 'SELECT * FROM videogames ORDER BY title ASC'
    return pool.query(query)
  }
}

const findOne = (id) => {
  const query = 'SELECT * FROM videogames WHERE id = $1'
  return pool.query(query, [id])
}

export default {
  findAll,
  findOne
}
