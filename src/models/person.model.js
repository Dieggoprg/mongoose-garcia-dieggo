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
        role: {
            type: Types.ObjectId,
            ref: "Role"
        }
    }
);

export const PersonModel = model("Person", personSchema)