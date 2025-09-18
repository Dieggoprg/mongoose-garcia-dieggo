//modelo persona
import { model, Schema, Types } from "mongoose";

const personSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    //relación 1:1
    address: [
      {
        type: Types.ObjectId,
        ref: "Address",
      },
      {
        rol: {
          type: String,
          enum: ["Teacher", "Student"]
        }
      }
    ],
    subjects: [{ type: Types.ObjectId, ref: "Subject" }],
    classroom: { type: Types.ObjectId, ref: "Classroom" },
    is_delete: {
      type: Boolean,
      default: false,
    },
    delete_at: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const PersonModel = model("Person", personSchema);
