const express = require('express');
const router = express.Router();

const menu = require('./../models/menu');
const { findByIdAndUpdate } = require('../models/person');

router.post("/", async(req, res)=>{

    try{
      const menuItems = req.body
  
        const newMenu = new menu(menuItems);
  
        const response = await newMenu.save();
        console.log(menuItems.name+" Menu Is Saved.");
        res.status(200).json(response)
      }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
      }
    
  })
  
  router.get("/",async(req,res)=>{
  
    try{
      const data1 = await menu.find();
      console.log("Please Select Menu");
        res.status(200).json(data1)
  
    }catch(err){
      console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
  
  })

  router.get("/:taste", async(req,res)=>{
    const tastes = req.params.taste;
    try{
  
      if(tastes == "spicy" || tastes == "sour" || tastes == "sweet"){
        const data = await menu.find({taste:tastes});
        if(data == ""){
          res.status(500).json({error: 'No Record Found'})
        }else{
          console.log("Data Fetched...");
        res.status(200).json(data)
        }
        
  
      }else{
        
        res.status(404).json({error: 'Please Enter A Valid data'})
      }
  
    }catch(err){
      console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
  
  })

  router.put("/:id", async (req, res)=>{
    const menuId = req.params.id;
    const updateData = req.body;

    try{

        const response = await menu.findByIdAndUpdate(menuId, updateData, {
            new: true,
            runValidators: true
        })

        if (!response) {
            return res.status(404).json({error: "Data Not Found" });
        }

        console.log("Data Updated");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
  })

  router.delete("/:id", async (req, res)=>{
    try{
        const menuId = req.params.id;
        const deleteData = await menu.findByIdAndDelete(menuId)

        if (!deleteData) {
            return res.status(404).json({error: "Data not Found"});
        }

        console.log("Data Deleted");
        res.status(200).json({message: "Data Deleted Successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
  })
  //checking for testing perpose
  

  module.exports = router;