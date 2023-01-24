// const exp = require('express');
// const path = require('path');
// const cors = require('cors');

// const ReciepeName = require('./model')
// const mongoose = require('mongoose');
import exp from "express";
import path from "path";
import cors from "cors";
import ReciepeName from "./model.js";
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

// mongoose
//   .connect(
//     "mongodb+srv://kallu:kallu@cluster0.7xxfajn.mongodb.net/?retryWrites=true&w=majority",
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     console.log("DB is connected");
//   })
//   .catch((err) => console.log(err));

// setImmediate(function A() {
//     console.log("1st immediate");
// });

// setImmediate(function B() {
//     console.log("2nd immediate");
// });

// process.nextTick(function C() {
//     console.log("1st process");
// });

// process.nextTick(function D() {
//     console.log("2nd process");
// });

// // First event queue ends here
// console.log("program started");


app.post("/addreciepe", async (req, res) => {
    console.log(req.body,'BODY');
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
app.get('/', async (req,res)=>{
  const newData = ReciepeName.find();
  return res.json(await newData)
});

app.get('/getreceipes', async (req,res)=>{
    const newData = ReciepeName.find();
    return res.json(await newData)
});

app.get('/getreceipes/:id', async (req,res)=>{
    const newData = ReciepeName.findById(req.params.id);
    return res.json(await newData)
})

app.delete('/deletereciepe/:id',async (req,res)=>{
    const data = await ReciepeName.findByIdAndDelete(req.params.id);
    const allData =  ReciepeName.find();
    return res.json({"data":await data,"message":"Post Deleted"})
})

app.listen(5000, () => {
  console.log("Server is running");
});
