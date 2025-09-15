//controller direcciones
import { AddressModel } from "../models/address.model.js";

//funcion para crear las direcciones
export const createAddress = async ( req , res ) => {
    const {street, number, city, country} = req.body;
    try {
        const newAddress = await AddressModel.create({
            street,
            number,
            city,
            country
        })
        
        if (!newAddress){
            return res.status(400).json({
                ok: false,
                msg: "Error creating the address",
            })
        }

        return res.status(201).json({
            ok: true,
            msg: "The address was created successfully.",
            data: newAddress
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: "Internal server error"
        })
    }
}