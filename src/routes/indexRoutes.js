//Archivo barril para las rutas
import { Router } from "express";
import { routerPerson } from "./person.route.js";


export const routes = Router()

routes.use(routerPerson)


