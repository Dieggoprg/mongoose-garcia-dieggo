//controller materias
import { SubjectModel } from "../models/subject.model.js";
import { CalendarModel } from "../models/calendar.model.js";
import { PersonModel } from "../models/person.model.js";

//funcion para crar una Materia
export const createSubject = async (req, res) => {
  const { name, teacher, date, number } = req.body;

  //Se crea una fecha y una materia en un mismo endpoint
  try {
    //primero busca la persona con el rol teacher
    const findTeacher = await PersonModel.findOne({rol: teacher});

    if (!findTeacher) {
      return res.status(404).json({
        ok: false,
        msg: "The Theacher not found",
      });
    }



    const newCalendar = await CalendarModel.create(date);

    //luego crea la materia
    const newSubject = await SubjectModel.create({
      name,
      teacher,
      date: newCalendar._id,
      classroom: number,
    });

    if (!newSubject) {
      return res.status(400).json({
        ok: false,
        msg: "Error creating the Subject",
      });
    }

    return res.status(201).json({
      ok: true,
      msg: "Subject created successfully",
      data: newSubject,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal Server Error",
    });
  }
};

//función para encontrar una materia por su ID
export const getByIdSubject = async (req, res) => {
  const { id } = req.params;

  try {
    const subject = await SubjectModel.findById(id)
      .populate("teachers")
      .populate("calendar").populate("classroom")

    if (!subject) {
      res.status(404).json("Error finding the Subject");
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: subject,
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//función para encontrar todas las materias
export const getAllSubject = async (req, res) => {
  try {
    const subject = await SubjectModel.find()

    res.status(200).json(subject);
    console.log(subject);

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para actualizar una Materia
export const updateSubject = async (req, res) => {
  const { id } = req.params;
  const {  name, teacher, date, number } = req.body;

  try {
    const updatedSubject = await SubjectModel.findByIdAndUpdate(
      id,
      {  name, teacher, date, number },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Subject updated correctly",
      data: updatedSubject,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para eliminar una materia
export const deleteSubject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSubject = await PersonModel.findOneAndDelete(id);

    // if (deletedPerson <= 0) {
    //   return res.status(400).json({
    //     ok: false,
    //     msg: "Error deleting the Person",
    //   });
    // }

    return res.status(200).json({
      ok: true,
      msg: "Successfully deleted",
      data: deleteSubject,
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};