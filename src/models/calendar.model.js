//modelo calendario
import { Schema, Types, model } from "mongoose";

const calendarSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const CalendarModel = model("Calendar", calendarSchema);
