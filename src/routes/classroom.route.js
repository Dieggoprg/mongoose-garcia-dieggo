//routes classroom
import { Router } from "express";
import { createClassroom, deleteClassroom, getAllClassroom, getByIdClassroom, updatedClassroom } from "../controllers/classroom.controller.js";

export const routerClassroom = Router();

routerClassroom.post("/postClassroom", createClassroom)
routerClassroom.get("/getAllClassroom", getAllClassroom)
routerClassroom.get("/getByIdClassroom/:id", getByIdClassroom)
routerClassroom.put("/updateClassroom/:id", updatedClassroom)
routerClassroom.delete("/deleteClassroom/:id", deleteClassroom)