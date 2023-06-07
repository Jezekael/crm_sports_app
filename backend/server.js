const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://MaiwennKermorgant:12345@cluster0.aeiuwwu.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
    //test insertion
    const myDB = client.db("Associations");
    const mycoll = myDB.collection("Assos");
    const doc = {nom : "Lézarts", adresse : "Bâtiment B"};
    const result = await mycoll.insertOne(doc);
    console.log("Insertion d'un document");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}
run().catch(console.dir);
