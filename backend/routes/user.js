import express from "express";
import passport from "passport";
import { logout, myProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


// @route   GET api/v1/googlelogin
// @desc    Login with Google
// @access  Public
router.get("/googlelogin", passport.authenticate("google", { scope: ["profile"] }));


// @route   GET api/v1/googlelogin/callbackURL
// @desc    Google login callback
// @access  Public
router.get(
    "/login",
    passport.authenticate("google"),
    (req, res, next) => {
        res.send("Logged In");
    }
);


router.get("/me", isAuthenticated, myProfile)


// @route   GET api/v1/googlelogout
// @desc    Logout from Google
// @access  Public
router.get("/logout", logout);


export default router; 