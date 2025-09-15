//controller Aula
import { ClassroomModel } from "../models/classroom.model.js";

//función para crear un Aula
export const createClassroom = async (req, res) => {
  const { number } = req.body;
  try {
    const newClassroom = await ClassroomModel.create({ number });

    if (!newClassroom) {
      return res.status(400).json({
        ok: false,
        msg: "Error creating the classroom",
      });
    }

    return res.status(201).json({
      ok: true,
      msg: "Classroom created successfully",
      data: newClassroom,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//funcion para encontrar todas las aulas
export const getAllClassroom = async (req, res) => {
  try {
    const classroom = await ClassroomModel.find();

    if (!classroom) {
      return res.status(404).json({
        ok: false,
        msg: "The Classroom not found",
      });
    }

    return res.status(200).json({
      ok: true,
      data: classroom,
    });
  } catch (error) {}
};

//funcion para encontrar aulas por su ID
export const getByIdClassroom = async (req, res) => {
  const { id } = req.params;

  try {
    const classroom = await ClassroomModel.findById(id).populate("students");

    if (!classroom) {
      res.status(404).json("Error finding the classroom");
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: classroom,
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//función para actualizar un aula
export const updatedClassroom = async (req, res) => {
  const { id } = req.params;
  const { number } = req.body;

  try {
    const updatedClassroom = await ClassroomModel.findByIdAndUpdate(
      id,
      { number },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Classroom updated correctly",
      data: updatedClassroom,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para eliminar un aula
export const deleteClassroom = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedClassroom = await ClassroomModel.findOneAndDelete(id, {
      new: true,
    });

    // if (deletedPerson <= 0) {
    //   return res.status(400).json({
    //     ok: false,
    //     msg: "Error deleting the Person",
    //   });
    // }

    return res.status(200).json({
      ok: true,
      msg: "Successfully deleted",
      data: deletedClassroom,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};
