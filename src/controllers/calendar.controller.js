//controller calendario
import { CalendarModel } from "../models/calendar.model.js";

//funcion para crear un calendario/fechas
export const createCalendar = async (req, res) => {
  const { date, description } = req.body;

  try {
    // const formattedDay = mod(day);

    // if (
    //   !formattedDay ||
    //   (formattedDay !== "Monday" &&
    //     formattedDay !== "Tuesday" &&
    //     formattedDay !== "Wednesday" &&
    //     formattedDay !== "Thursday" &&
    //     formattedDay !== "Friday")
    // ) {
    //   return res.status(400).json({
    //     ok: false,
    //     msg: "Invalided Day",
    //   });
    // }

    const newCalendar = await CalendarModel.create({
      date,
      description,
    });

    // const populatedCalendar = await CalendarModel.findById(
    //   newCalendar._id
    // ).populate("classroom");

    return res.status(201).json({
      ok: true,
      msg: "Calendar created successfully",
      data: newCalendar,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para encontrar un calendario/fecha por su ID
export const getByIdCalendar = async (req, res) => {
  const { id } = req.params;

  try {
    const calendar = await CalendarModel.findById(id);

    if (!calendar) {
      res.status(404).json("Error finding the Calendar");
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: calendar,
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//funcion para encontrar todas los calendar
export const getAllCalendar = async (req, res) => {
  try {
    const calendar = await CalendarModel.find();

    if (!calendar) {
      return res.status(404).json({
        ok: false,
        msg: "The Calendar not found",
      });
    }

    return res.status(200).json({
      ok: true,
      data: calendar,
    });
  } catch (error) {}
};

//función para actualizar un calendar
export const updatedCalendar = async (req, res) => {
  const { id } = req.params;
  const { date, description } = req.body;

  try {
    const updatedCalendar = await CalendarModel.findByIdAndUpdate(
      id,
      { date, description },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Calendar updated correctly",
      data: updatedCalendar,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para eliminar un calendar
export const deleteCalendar = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCalendar = await CalendarModel.findOneAndDelete(id, {
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
      data: deletedCalendar,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};
