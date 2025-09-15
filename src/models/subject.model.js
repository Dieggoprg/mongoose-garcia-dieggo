//modelo materias
import {Schema, Types, model} from "mongoose";

const subjectSchema = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        // Relación N:M con Person (estudiantes)
        students:{
            type: Types.ObjectId,
            ref: "Person",
            required:true
        },
        // Relación 1:1 - Una materia tiene un profesor
        teachers:{
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
            default: "Aula a asignar"
        }
    },{
        versionKey:false,
        timestamps:true
    }
);

export const SubjectModel = model("Subject", subjectSchema)