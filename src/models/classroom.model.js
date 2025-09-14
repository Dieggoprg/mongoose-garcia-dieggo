import {Schema, model} from "mongoose";

const classroomSchema = new Schema(
    {
        number: {
            type: Number,
            unique: true,
            required: true
        }
    }
)

export const ClassroomModel = model("Classroom", classroomSchema)