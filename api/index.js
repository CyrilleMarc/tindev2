const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Recruteur = require("./models/Recruteur");
const User = require("./models/User");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
dotenv.config();

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.REACT_APP_PORT }));
app.get("/test", (req, res) => {
  res.send("Server is running on port 3002");
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

//******************REGISTER RECRUTEUR******************* */
app.post("/recruteurRegister", async (req, res) => {
  const { email, password } = req.body;
  const recruteur = new Recruteur({
    email,
    password: await bcrypt.hash(password, 10),
  });
  await recruteur.save();
  res.send(recruteur);
});

//******************LOGIN RECRUTEUR******************* */
app.post("/recruteurLogin", async (req, res) => {
  const { email, password } = req.body;
  const recruteurDoc = await Recruteur.findOne({ email });
  if (!recruteurDoc) {
    return res.status(401).json({ message: "Invalid email or password" });
  } else {
    const isPasswordValid = await bcrypt.compare(
      password,
      recruteurDoc.password
    );
    if (!isPasswordValid) {
      return res.send("Password is not valid");
    } else {
      jwt.sign({ email, id: recruteurDoc._id }, "secret", {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: recruteurDoc._id,
          email,
        });
      });
    }
  }
});

//******************REGISTER DEVELOPPEUR******************* */
app.post("/developpeurRegister", async (req, res) => {
  const { email, password } = req.body;
  const developpeur = new User({
    email,
    password: await bcrypt.hash(password, 10),
  });
  await developpeur.save();
  res.send(developpeur);
});

//******************LOGIN DEVELOPPEUR******************* */
app.post("/developpeurLogin", async (req, res) => {
  const { email, password } = req.body;
  const developpeurDoc = await User.findOne({ email });
  if (!developpeurDoc) {
    return res.status(401).json({ message: "Invalid email or password" });
  } else {
    const isPasswordValid = await bcrypt.compare(
      password,
      developpeurDoc.password
    );
    if (!isPasswordValid) {
      return res.send("Password is not valid");
    } else {
      jwt.sign(
        { email, id: developpeurDoc._id },
        "secret",
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({
            id: developpeurDoc._id,
            email,
          });
        }
      );
    }
  }
});

//******************EDIT USERS******************* */
app.get("/usersList", async (req, res) => {
  res.json(await User.find());
});

//******************EDIT RECRUTEURS******************* */
app.get("/recruteurList", async (req, res) => {
  res.json(await Recruteur.find());
});

//**************READ USER BY ID*********************** */
app.get("/editUser/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const userEdit = await User.findById(id);
  res.json(userEdit);
});

//**************READ RECRUTEUR BY ID*********************** */
app.get("/editRecruteur/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const recruteurEdit = await Recruteur.findById(id);
  res.json(recruteurEdit);
});

//******************DELETE DEVELOPPEUR****************** */
app.delete("/deleteUser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//******************DELETE RECRUTEUR******************* */
app.delete("/deleteRecruteur/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRecruteur = await Recruteur.findByIdAndDelete(id);
    res.json(deletedRecruteur);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//*******************UPDATE* DEVELOPPEUR******************** */
app.put("/editUser/:id", async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { email, password },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//*******************UPDATE RECRUTEUR******************** */
app.put("/editRecruteur/:id", async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const updatedRecruteur = await Recruteur.findByIdAndUpdate(
      id,
      { email, password },
      { new: true }
    );
    res.json(updatedRecruteur);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//************************LOGOUT*********************** */
app.get("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logout success" });
});
