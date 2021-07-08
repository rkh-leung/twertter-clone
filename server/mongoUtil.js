const mongoose = require('mongoose');
const uri = process.env.DB_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Database connection error: ' + error)
    })


// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const main = async () => {
//     try {
//         const result = await client.connect()
//         console.log('result', result)
//         await listDatabases(client)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         await client.close()
//     }
// }
// main().catch(console.error)
//
// const listDatabases = async (client) => {
//     const databasesList = await client.db().admin().listDatabases()
//     console.log("Databases:")
//     databasesList.databases.forEach(db => console.log(` - #{db.name}`))
// }
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
