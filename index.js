import express from "express";

import cors from "cors";

import dotenv from "dotenv";
import router from "./src/routes";
import mongoose from "mongoose";

dotenv.config();

const { PORT, DB_URI } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

mongoose
	.connect(DB_URI)
	.then(() => {
		console.log("connect db thanh cong roi!");
	})
	.catch((err) => {
		console.log(err);
	});

app.use("/api", router);

app.listen(PORT | 8000, () => {
	console.log(`server is running on port ${PORT | 8000}`);
});
