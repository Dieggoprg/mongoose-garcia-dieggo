//Archivo barril para las rutas
import { Router } from "express";
import { routerPerson } from "./person.route.js";
import { routerAddress } from "./address.route.js";
import { routerSubject } from "./subject.route.js";
import { routerCalendar } from "./calendar.route.js";
import { routerClassroom } from "./classroom.route.js";

export const routes = Router()

routes.use(routerPerson)
routes.use(routerAddress)
routes.use(routerSubject)
routes.use(routerCalendar)
routes.use(routerClassroom)



