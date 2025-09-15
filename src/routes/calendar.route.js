//routes calendario
import { Router } from "express";
import { createCalendar, getByIdCalendar, getAllCalendar, updatedCalendar, deleteCalendar } from "../controllers/calendar.controller.js";

export const routerCalendar = Router();

routerCalendar.post("/postCalendar", createCalendar)
routerCalendar.get("/getByIdCalendar/:id", getByIdCalendar)
routerCalendar.get("/getAllCalendar", getAllCalendar)
routerCalendar.put("/updateCalendar/:id", updatedCalendar)
routerCalendar.delete("/deleteCalendar/:id", deleteCalendar)



