import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";
 
export const assosRouter = express.Router();
assosRouter.use(express.json());
 
assosRouter.get("/", async (_req, res) => {
   try {
       const asso = await collections.assos.find({}).toArray();
       res.status(200).send(asso);
   } catch (error) {
       res.status(500).send(error.message);
   }
});
assosRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const asso = await collections.assos.findOne(query);
  
        if (asso) {
            res.status(200).send(asso);
        } else {
            res.status(404).send(`Echec de la requête de l'association : ID ${id}`);
        }
  
    } catch (error) {
        res.status(404).send(`Echec de la requête de l'association: ID ${req?.params?.id}`);
    }
 });
 assosRouter.post("/", async (req, res) => {
    try {
        const asso = req.body;
        const result = await collections.assos.insertOne(asso);
  
        if (result.acknowledged) {
            res.status(201).send(`Nouvelle association créée: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Echec à la création d'une nouvelle association.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
 });
 assosRouter.put("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const asso = req.body;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.assos.updateOne(query, { $set: asso });
  
        if (result && result.matchedCount) {
            res.status(200).send(`Association mise à jour : ID ${id}.`);
        } else if (!result.matchedCount) {
            res.status(404).send(`Association non trouvée : ID ${id}`);
        } else {
            res.status(304).send(`Association non trouvée : ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
 });
 assosRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.assos.deleteOne(query);
  
        if (result && result.deletedCount) {
            res.status(202).send(`Suppression de l'association : ID ${id}`);
        } else if (!result) {
            res.status(400).send(`Echec à la suppression de l'association : ID ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Echec à la suppression de l'association : ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
 });
