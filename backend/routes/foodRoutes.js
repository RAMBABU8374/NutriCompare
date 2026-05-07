const express = require("express");

const Food = require("../models/Food");

const router = express.Router();

router.get("/foods", async(req,res)=>{

  const foods = await Food.find();

  res.json(foods);
});

router.post("/foods", async(req,res)=>{

  const food = new Food(req.body);

  await food.save();

  res.json(food);
});

router.delete("/foods/:id", async(req,res)=>{

  await Food.findByIdAndDelete(req.params.id);

  res.json({message:"Deleted"});
});

module.exports = router;