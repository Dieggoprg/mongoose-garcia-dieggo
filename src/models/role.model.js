//modelo rol
import {Schema, model} from "mongoose"

const roleSchema = new Schema(
    {
        rol: {
            type: String,
            required: true,
            enum: ["Student", "Teacher"],
            default: "Student"
        }
    }
)

export const RoleModel = model("Role", roleSchema)