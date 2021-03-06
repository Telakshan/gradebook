const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");


const { body, validationResult } = require("express-validator");

const User = require("../../models/User");

router.post(
  "/",
  [
    body("name", "Name is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
    body("password", "Enter password with 6 or more characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        }
      };

      jwt.sign(
          payload, 
          config.get("jwtSecret"),
          {expiresIn: 360000 },
          (error, token) => {
            if(error) throw error;
            res.json({ token })
          });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error man!");
    }

    
  }
);





module.exports = router;
