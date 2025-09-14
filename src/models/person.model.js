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
            ref: "Address" //relación 1:1
        },
        rol:{
            type: String,
            enum: ["Student", "Teacher"],
            default: "Student",
            required: true
        }
    }
);

export const PersonModel = model("Person", personSchema)