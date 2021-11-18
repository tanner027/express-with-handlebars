import express from "express";
import { engine } from "express-handlebars"; // "express-handlebars"

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

app.use((req, res, next) => {
	process.stdout.write(JSON.stringify({
		url: req.originalUrl,
		mthod: req.method,
		protocol: req.protocol,
		hostname: req.hostname
	}) + '\n');

	next();
});

app.get("/", (req, res) => {
	res.render("home", {
		name: (req.get("Experience") ? "Jim" : "Steven"),
	});
});

app.listen(3000, () => {
	console.log("express-handlebars example server listening on: 3000");
});
