import { Schema, Types, model } from "mongoose";
import { PersonModel } from "./person.model.js"; 

const classroomSchema = new Schema(
  {
    number: {
      type: Number,
      unique: true,
      required: true,
    },
    // Relación 1:N - Un aula tiene muchos estudiantes
    students: [
      {
        type: Types.ObjectId,
        ref: "Person",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Middleware: antes de eliminar un aula, marcar a los estudiantes como eliminados
classroomSchema.pre("findOneAndDelete", async function (next) {
  try {
    const classroomId = this.getQuery()._id;

    // actualizar todos los estudiantes de esa aula
    await PersonModel.updateMany(
      { classroom: classroomId }, // 👈 esto funciona solo si Person tiene un campo classroom
      { is_delete: true, delete_at: new Date() }
    );

    next();
  } catch (err) {
    next(err);
  }
});

export const ClassroomModel = model("Classroom", classroomSchema);
