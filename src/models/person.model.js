//modelo persona
import {model , Schema, Types} from "mongoose"

const personSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: { 
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        address:{
            type: Types.ObjectId, 
            ref: "Address"
        }
    }
);

export const PersonModel = model("Person", personSchema)