import express from "express";
import dashboardRouter from "./routers/dashboard.router"

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/api', dashboardRouter);

app.get("/", (req, res) => {
    res.send('Get');
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
