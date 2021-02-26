const express = require("express");
const router = express.Router();
const Assignment = require("../../models/Assignment");
const Course = require('../../models/Course');
const auth = require("../../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const assignment = new Assignment({
      ...req.body,
      user: req.user.id,
    });


    await assignment.save();
    res.status(201).send(assignment);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const assignment = await Assignment.findOneAndDelete({
      _id: req.params.id,
    });

    if (!assignment) {
      return res.status(400).json({ msg: "Assignment not found" });
    }
    res.json({ msg: "Assignment deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const updates = Object.keys(req.body);

    console.log(updates);

    const assignment = await Assignment.findOne({ _id: req.params.id });

    if (!assignment) return res.status(404).send();

    updates.forEach((update) => {
      assignment[update] = req.body[update];
    });

    await assignment.save();
    res.json({ msg: "Assigment updated!" });
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;
