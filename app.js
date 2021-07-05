const express = require('express')
const app = express()
const PORT = 8001

const server = app.listen(
    PORT, () => console.log(`Server listening on port ${PORT}`)
)