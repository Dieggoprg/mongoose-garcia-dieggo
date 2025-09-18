//controller persona
import { PersonModel } from "../models/person.model.js";
import { AddressModel } from "../models/address.model.js";

//función para crear una Persona
export const createPerson = async (req, res) => {
  const { firstName, lastName, age, address, rol } = req.body;

  //crea la dirección y la persona en un mismo endpoint
  try {
    //Primero creo una dirección
    const newAddress = await AddressModel.create(address);

    //luego creo una persona referenciada a esa dirección
    const newPerson = await PersonModel.create({
      firstName,
      lastName,
      age,
      address: newAddress._id,
      rol
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

//Funcion para encontrar personas por su ID
export const getByIdPerson = async (req, res) => {
  const { id } = req.params;

  try {
    const person = await PersonModel.findById(id)
      .populate("address")
      .populate({
        path: "subjects",
        populate: [
          { path: "calendar" },
          { path: "classroom" },
        ],
      });

    if (!person) {
      return res.status(404).json({
        ok: false,
        msg: "Person not found",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Successful search",
      data: person,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
};


//función para encontrar todas las personas
export const getAllPersons = async (req, res) => {
  try {
    const person = await PersonModel.find({is_delete: false})
      .populate("address")
      .populate("subject", "name")
      .populate("classroom");

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
  const { firstName, lastName, age, address, rol } = req.body;

  try {
    const updatedPerson = await PersonModel.findByIdAndUpdate(
      id,
      { firstName, lastName, age, address, rol },
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
    const deletedPerson = await PersonModel.findOneAndUpdate(
      id,
      {
        is_delete: true,
        delete_at: new Date(),
      },
      {
        new: true,
      }
    );

    // if (deletedPerson <= 0) {
    //   return res.status(400).json({
    //     ok: false,
    //     msg: "Error deleting the Person",
    //   });
    // }

    return res.status(200).json({
      ok: true,
      msg: "Successfully deleted",
      data: deletePerson,
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Internal server error",
    });
  }
};
