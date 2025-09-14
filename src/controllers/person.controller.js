//controller persona
import { PersonModel } from "../models/person.model.js";

//función para crear una Persona
export const createPerson = async (req, res) => {
  const { name, lastName, age, role } = req.body;

  try {
    const newPerson = await PersonModel.create({
      name,
      lastName,
      age,
      role
    });

    if (!newPerson) {
      res.status(400).json("Error creating the Person");
    }

    res.status(201).json({
      ok: true,
      msg: "Correctly created Person",
      data: newPerson,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para encontrar una persona por su ID
export const getByIdPerson = async (req, res) => {
  const { id } = req.params;

  try {
    const person = await PersonModel.findById(id);

    if (!person) {
      res.status(404).json("Error finding the Person");
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: person,
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//función para encontrar todas las personas
export const getAllPersons = async (req, res) => {
  try {
    const person = await PersonModel.find();

    res.status(200).json(person);
    console.log(person);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para actualizar una persona
export const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, age, role } = req.body;

  try {
    const updatedPerson = await PersonModel.findByIdAndUpdate(
      id,
      { name, lastName, age, role },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Person updated correctly",
      data: updatedPerson,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};

//función para eliminar una persona
export const deletePerson = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPerson = await PersonModel.findOneAndDelete(id);

    if (deletedPerson <= 0) {
      return res.status(400).json({
        ok: false,
        msg: "Error deleting the Person",
      });
    }

    return res.status(200).json({
      ok: true,
      msg: "Successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};