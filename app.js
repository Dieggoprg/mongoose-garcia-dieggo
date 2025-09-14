import express from "express"
import cors from "cors"
import "dotenv/config"
import { connectDB } from "./src/config/database.js"

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors({
    // origin: 
}))

//test conection BD
connectDB()
.then(() => {
 app.listen(PORT, () => {
   console.log("Server listening on port", PORT);
  });
})
 .catch((error) => {
 console.error("Error connecting to dataBase:", error);
});