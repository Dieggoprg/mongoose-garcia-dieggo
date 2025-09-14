//modelo calendario
import {Schema, Types, model} from "mongoose";

const calendarSchema = new Schema(
    {
        day:{
            type: String,
            enum:["Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
            ],
            required: true
        },
        startTime:{
            type: String,
            required: true
        },
        endTime:{
            type: String,
            required: true
        },
        classroom:{
            type: Types.ObjectId,
            ref: "Classroom",
            required: true
        }
    }
);

export const CalendarModel = model("Calendar", calendarSchema)