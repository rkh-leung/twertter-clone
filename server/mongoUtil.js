const mongoose = require('mongoose');

class DatabaseConnect {
    constructor() {
        this.connect()
    }
    connect() {
        const uri = process.env.DB_URI
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
            .then(() => {
                console.log('Connected to MongoDB')
            })
            .catch((error) => {
                console.log('Database connection error: ' + error)
            })
    }
}

module.exports = new DatabaseConnect()