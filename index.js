const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get(["/", "/home"], (req, res) => {
    res.render("home");
});
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/projects", (req, res) => res.render("projects"));

app.use((req, res) => res.status(404).render("error"));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));