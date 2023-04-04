const express = require("express");
const fs = require("fs");
const { changePositionOfWidget } = require("../helper/index");

const router = express.Router();

router.get("/", (req, res) => {
    fs.readFile(
        __dirname + "/../db/allDashboardsData.json",
        "utf8",
        (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Internal Server Error");
            }

            const jsonData = JSON.parse(data);
            return res.send(jsonData);
        }
    );
});

router.get("/:id", (req, res) => {
    fs.readFile(
        __dirname + "/../db/dashboardData.json",
        "utf8",
        (err, data) => {
            try {
                const id = req.params.id;
                const jsonData = JSON.parse(data);
                const singleDashBoardData = jsonData[id];
                if (singleDashBoardData === undefined) throw new Error();
                return res.send(singleDashBoardData);
            } catch (err) {
                return res
                    .status(500)
                    .send("dashboard data you are looking for is not found");
            }
        }
    );
});

router.get("/widget/:id", (req, res) => {
    fs.readFile(__dirname + "/../db/widgetsData.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
        }
        const { id } = req.params;
        try {
            const jsonData = JSON.parse(data);
            if (jsonData[id] === undefined) throw new Error();
            return res.send(jsonData[id]);
        } catch (error) {
            return res.status(500).send(`Widget for id ${id} is not found`);
        }
    });
});

router.post("/:id/widget/:id2", (req, res) => {
    const { position } = req.body;
    fs.readFile(
        __dirname + "/../db/dashboardData.json",
        "utf8",
        (err, data) => {
            try {
                const { id, id2 } = req.params;
                const jsonData = JSON.parse(data);
                const singleDashBoardData = jsonData[id];
                const newArray = changePositionOfWidget(
                    singleDashBoardData,
                    id2,
                    position - 1
                );
                if (Array.isArray(newArray)) {
                    jsonData[id] = newArray;
                }
                let data2 = JSON.stringify(jsonData);
                fs.writeFile(
                    __dirname + "/../db/dashboardData.json",
                    data2,
                    (err) => {
                        if (err) throw new Error();
                    }
                );
                return res.send(newArray);
            } catch (error) {
                console.log("error:", error);
                return res
                    .status(500)
                    .send({ error: "Item with id not found" });
            }
        }
    );
});

module.exports = router;
