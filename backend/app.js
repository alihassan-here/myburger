import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
export default app;

dotenv.config({
    path: "./config/config.env",
});

//USING MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(cookieParser());

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

//IMPORTING ROUTES
import userRoute from "./routes/user.js";
import passport from "passport";

app.use("/api/v1", userRoute);

//ERROR HANDLING MIDDLEWARE


app.use(errorMiddleware);

