const express = require("express");
const cors = require("cors");
const dashboardRouter = require("./routers/dashboard.router");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api", dashboardRouter);

app.get("/", (req, res) => {
    res.send("Get");
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});