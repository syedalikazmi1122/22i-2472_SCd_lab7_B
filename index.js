import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import eventRoutes from "./Routes/index.js";
import authRoutes from "./routes/authRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/events", eventRoutes);
app.use("/notifications", notificationRoutes);

mongoose
    .connect("mongodb://localhost:27017/")
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error(err));

export default app;