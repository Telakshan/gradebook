const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const StudentProfile = require("../../models/StudentProfile");
const User = require("../../models/User");
const auth = require("../../middleware/auth");
const sharp = require("sharp");
const multer = require("multer");

//Get current user's profile
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await StudentProfile.findOne({
      user: req.user.id,
    }).populate("User", ["name", "email"]);

    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no profile for this user??" });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

//Create a profile
router.post(
  "/",
  [
    auth,
    [
      body("gradeLevel", "Grade level is required").not().isEmpty(),
      body("college", "College is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      college,
      gradeLevel,
      major,
      shortBio,
    } = req.body;

    const studentprofilefields = {};
    studentprofilefields.user = req.user.id;
    if (college) studentprofilefields.college = college;
    if (gradeLevel) studentprofilefields.gradeLevel = gradeLevel;
    if (major) studentprofilefields.major = major;
    if (shortBio) studentprofilefields.shortBio = shortBio;

    try {
      let studentprofile = await StudentProfile.findOne({ user: req.user.id });

      if (studentprofile) {
        studentprofile = await StudentProfile.findOneAndUpdate(
          //if there is a profile, update it
          { user: req.user.id },
          { $set: studentprofilefields },
          { new: true }
        );

        return res.json(studentprofile);
      }

      //if there is no profile, create
      studentprofile = new StudentProfile(studentprofilefields);
      await studentprofile.save();
      res.json(studentprofile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

//upload
const upload = multer({
  limits: {
    fileSize: 2000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(
        new Error("Please upload an image in .png, .jpg or .jpeg formats")
      );
    }
    cb(undefined, true);
  },
});

//upload a profile picture
router.post("/avatar", auth, upload.single("avatar"), async (req, res) => {
  try {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .jpg()
      .toBuffer();
    //await req.user.save();
    const finduser = await StudentProfile.findOneAndUpdate(
      { user: req.user.id },
      { $set: buffer }
    );
    finduser.avatar = buffer;
    await finduser.save();
    res.json(finduser);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Cannot upload");
  }
});

//delete avatar
router.delete(
  "/avatar",
  auth,
  upload.single("avatar", async (req, res) => {
    try {
      req.user.avatar = undefined;
      await req.user.save();
      res.send();
    } catch (error) {
      console.log(error.message);
      res.status(404).send();
    }
  })
);

router.get('/avatar', auth, async (req, res) => {
    try{
      const user = await User.findById(req.params.id);
      if(!user || !user.avatar){
        throw new Error();
      }
      res.set('Content-type', 'image/png');
      req.send(user.avatar);
    }catch(error){
      res.status(404).send();
    }
})

router.get("/", async (req, res) => {
  try {
    const profiles = await StudentProfile.find().populate("user", ["name"]);
    res.json(profiles);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

router.get("/user/:user_id", async (req, res) => {
  try {
    const studentprofile = await StudentProfile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name"]);

    if (!studentprofile)
      return res
        .status(400)
        .json({ msg: "There is no profile for this student" });
    res.json(studentprofile);
  } catch (error) {
    console.log(error.message);
    if (error.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }

    res.status(500).send("Server error");
  }
});

router.delete("/", auth, async (req, res) => {
  try {
    await StudentProfile.findOneAndRemove({ user: req.user.id });

    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (error) {
    res.status(400).json({ msg: "User not found" });
  }
});

//TODO: Doesn't work

// router.patch("/gradelevel/:id", auth, async (req, res) => {

//   try {
//       console.log(req.params.id);
//     const profile = await StudentProfile.findOne({ _id: req.params.id });
//     console.log(profile);
//     profile.gradeLevel = req.body.gradeLevel;
//     await profile.save();
//     res.json({msg: 'gradelevel changed'})
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
