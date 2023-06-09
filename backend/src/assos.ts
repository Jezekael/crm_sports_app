import * as mongodb from "mongodb";
 
export interface Association {
   nom: string;
   adresse: string;
   //level: "junior" | "mid" | "senior"; //exemple de choix
   _id?: mongodb.ObjectId;
}