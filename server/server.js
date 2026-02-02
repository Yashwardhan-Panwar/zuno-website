const express = require('express');
const app = express();
const cors = require("cors");
const corsOption = {
    origin: "http://localhost:5173"
};

app.use(cors(corsOption));

app.get("/api", (req, res) => {
    res.json({ status: "Hello from the server!" });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

