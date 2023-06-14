import * as mongodb from "mongodb";
 
export interface Association {
   nom: string;
   description: string;
   _id?: mongodb.ObjectId;
   membres : [name: mongodb.ObjectId, type :"founder" | "member" | "admin"]; 
   rdv:[title: string, startDate: string, endDate: string, id: mongodb.ObjectId];

};

export interface Utilisateurs {
   username: string;
   locale: string;
   assosSuivies : [assoSuivie : mongodb.ObjectId];
   _id?: mongodb.ObjectId

}