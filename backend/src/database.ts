import * as mongodb from "mongodb";
import { Association } from "./assos";
 
export const collections: {
   assos?: mongodb.Collection<Association>;
} = {};
 
export async function connectToDatabase(uri: string) {
   const client = new mongodb.MongoClient(uri);
   await client.connect();
 
   const db = client.db("Associations");
   await applySchemaValidation(db);
 
   const assosCollection = db.collection<Association>("assos");
   collections.assos = assosCollection;
}
 
// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Employee model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
   const jsonSchema = {
       $jsonSchema: {
           bsonType: "object",
           required: ["nom", "adresse"],
           additionalProperties: false,
           properties: {
               _id: {},
               name: {
                   bsonType: "string",
                   description: "'nom' est requis et est une chaîne de caractères",
               },
               position: {
                   bsonType: "string",
                   description: "'adresse' est requis et est une chaîne de caractères",
                   minLength: 5
               },
               /*level: {
                   bsonType: "string",
                   description: "'level' is required and is one of 'junior', 'mid', or 'senior'",
                   enum: ["junior", "mid", "senior"],
               },*/
           },
       },
   };
 
   // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
       collMod: "assos",
       validator: jsonSchema
   }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("assos", {validator: jsonSchema});
       }
   });
}