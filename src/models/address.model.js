//modelo direcciones
import {Schema, model} from "mongoose";

const addressSchema = new Schema(
    {
        street:{
            type:String,
            required: true
        },
        number:{
            type:Number,
            required: true
        },
        city:{
            type:String,
            required: true
        },
        country:{
            type:String,
            required: true
        }
    }
);

export const AddressModel = model("Address", addressSchema)