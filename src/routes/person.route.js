//routes personas
import { Router } from "express";
import { createPerson, getAllPersons, updatePerson, getByIdPerson, deletePerson } from "../controllers/person.controller.js";

export const routerPerson = Router();

routerPerson.get("/getAllPerson", getAllPersons)
routerPerson.post("/postPerson", createPerson)
routerPerson.put("/updatePerson", updatePerson)
routerPerson.get("/getByIdPerson", getByIdPerson)
routerPerson.delete("/deltePerson", deletePerson)