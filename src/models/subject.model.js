//modelo materias
import {Schema, Types, model} from "mongoose";

const subjectSchema = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        teacher:{
            type: String,
            required:true
        },
        date: {
            type: Types.ObjectId,
            ref: "Calendar"
        },
        classroom:{
            type: Types.ObjectId,
            ref: "Classroom",
            required: true
        }
    }
);

export const SubjectModel = model("Subject", subjectSchema)