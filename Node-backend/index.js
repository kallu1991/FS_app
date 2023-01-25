import exp from "express";
import path from "path";
import cors from "cors";
import ReciepeName from "./models/model.js";
import userDetails from "./models/user_model.js";
import mongoose from "mongoose";
const app = exp();
app.use(cors());
app.use(exp.json());
mongoose
  .connect(
    "mongodb+srv://kallu:kallu@cluster0.7xxfajn.mongodb.net/Food-delivery",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => console.log(err));

app.post("/addreciepe", async (req, res) => {
  const { reciepeName, reciepeQuantity } = req.body;

  try {
    const newData = new ReciepeName({ reciepeName, reciepeQuantity });
    console.log(newData);
    await newData.save();
    return res.json(await ReciepeName.find());
  } catch (err) {
    console.log(err);
  }
});

app.post("/create_user", async (req, res) => {
  console.log(req, "req");
  const { userName, passWord, reEnterPassWord } = req.body;
  console.log(req.body, "BODY");
  try {
    const newData = new userDetails({ userName, passWord, reEnterPassWord });
    console.log(newData);
    await newData.save();
    return res.status(200).json({
      message: "User Created Successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/signin", async (req, res) => {
  const newData = userDetails
    .find({
      userName: req.body.userName,
      passWord: req.body.passWord,
    })
    .then((data) => {
      if (data.length > 0) {
        data.map((ele) => {
          if (
            ele.userName === req.body.userName &&
            ele.passWord === req.body.passWord
          ) {
            res.status(200).json({
              message: "Login Successful",
            });
          }
        });
      } else if (data.length == 0) {
        res.status(200).json({
          message: "User Not Found",
        });
      }
    }).catch((err)=>{
      console.log(err);
    })
});

app.get("/", async (req, res) => {
  const newData = ReciepeName.find();
  return res.json(await newData);
});

app.get("/getreceipes", async (req, res) => {
  const newData = ReciepeName.find();
  return res.json(await newData);
});

app.get("/getreceipes/:id", async (req, res) => {
  const newData = ReciepeName.findById(req.params.id);
  return res.json(await newData);
});

app.delete("/deletereciepe/:id", async (req, res) => {
  const data = await ReciepeName.findByIdAndDelete(req.params.id);
  const allData = ReciepeName.find();
  return res.json({ data: await data, message: "Post Deleted" });
});

app.listen(5000, () => {
  console.log("Server is running");
});
