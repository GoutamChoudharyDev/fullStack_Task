import { app } from "./app.js";
import { connectDB } from "./utils/db.js";

// call the function to connect to the database
connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });