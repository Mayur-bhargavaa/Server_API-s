const express = require("express");
const router = express.Router();

const dataVideo = require("../models/data"); // Assuming dataVideo is the model
router.get("/",(req, res) => {
  res.send("i am live again");
});
router.post("/data", async (req, res) => {
  try {
    const addingData = new dataVideo(req.body);
    // console.log(req.body);
    const insertData = await addingData.save();
    res.status(201).send(insertData);
  } catch (e) {
    res.status(400).send(e.message); // Sending error message instead of the entire error object
  }
});

router.get("/data", async (req, res) => {
  try {
    const getData = await dataVideo.find({});
    res.send(getData);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/data/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDatabase = await dataVideo.findById(_id);
    if (!getDatabase) {
      return res.status(404).send("Data not found");
    }
    res.send(getDatabase);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.patch("/data/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDatabase = await dataVideo.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!getDatabase) {
      return res.status(404).send("Data not found");
    }
    res.send(getDatabase);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete("/data/:id", async (req, res) => {
  try {
    const getDatabase = await dataVideo.findByIdAndDelete(req.params.id);
    if (!getDatabase) {
      return res.status(404).send("Data not found");
    }
    res.send(getDatabase);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
