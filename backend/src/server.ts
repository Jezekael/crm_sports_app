import { assosRouter } from "./listes.routes";
import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { connectToDatabase } from "./database";

// Load environment variables from the .env file, where the ATLAS_URI is configured
dotenv.config();

const { ATLAS_URI } = process.env;

if (!ATLAS_URI) {
  console.error("No ATLAS_URI environment variable has been defined in config.env");
  process.exit(1);
}

connectToDatabase(ATLAS_URI)
   .then(() => {
       const app = express();
       app.use(cors());
 
       // start the Express server
       app.use("/assos", assosRouter);
       app.listen(5200, () => {
           console.log(`Server running at http://localhost:5200...`);
       });
 
   })
   .catch(error => console.error(error));


const { MongoClient } = require("mongodb");

/*// Replace the uri string with your connection string.
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
*/