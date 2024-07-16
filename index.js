import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import router from "./src/routes/index.js";
// cross origin resource sharing

const app = express();

app.use(cors());
app.use(express.json());

mongoose
	.connect(`mongodb://localhost:27017/wd18334`)
	.then(() => {
		console.log(`connect db thanh cong roi!`);
	})
	.catch((err) => console.log(err));

app.use("/api", router);

app.listen(8000, () => {
	`server is running on port 8000`;
});
