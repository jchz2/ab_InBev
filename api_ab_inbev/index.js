
const app = require('./src/server')
const connectDB = require('./src/lib/db')

require('dotenv').config({ path: `.env.${ process.env.NODE_ENV }` })

connectDB()
const port = process.env.PORT || 4000
const server = app.listen({ port }, () =>
  console.log(`Server running on http://localhost:${ port }`)
)

module.exports = server
