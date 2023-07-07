import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingRouter from "./routes/booking-routes";
import cors from 'cors'

const app = express();
dotenv.config();
// const url=http://localhost:5000;
// import cors from 'cors'
// const app = express();
app.use(cors());
// middlewares
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);
app.use("/booking",bookingRouter);


mongoose
  .connect(
    // `mongodb+srv://bs5117300:${process.env.MONGODB_PASSWORD}@cluster0.7wx6arm.mongodb.net/`
    `mongodb+srv://bs5117300:${process.env.MONGODB_PASSWORD}@cluster0.7wx6arm.mongodb.net/`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("connected to database and server is running")
    )
  )
  .catch((e) => console.log(e));
