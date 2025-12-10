import express, { Router } from "express";
import { Register,Login } from "../controller/AuthController";
Router = express.Router();

Router.post("/register", Register);
Router.post("/login", Login);
export default Router;
