//routes materias
import { Router } from "express";
import { createSubject, getAllSubject, getByIdSubject, updateSubject, deleteSubject } from "../controllers/subject.controller.js";

export const routerSubject = Router();

routerSubject.post("/postSubject", createSubject);
routerSubject.get("/getByIdSubject/:id", getByIdSubject)
routerSubject.get("/getAllSubject", getAllSubject)
routerSubject.put("/updateSubject/:id", updateSubject)
routerSubject.delete("/deleteSubject/:id", deleteSubject)
