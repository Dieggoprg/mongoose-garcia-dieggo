//routes direcciones
import { Router } from "express";
import { createAddress } from "../controllers/address.controller.js";

export const routerAddress = Router()

routerAddress.post("/postAddress", createAddress)