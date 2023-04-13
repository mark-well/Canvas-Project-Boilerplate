
let express = require("express");
let app = express();
let PORT = 8080;

//Middleware
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send(__dirname + "/index.html");
	res.end();
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})