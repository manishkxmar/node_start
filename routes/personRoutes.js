const express = require('express');
const router = express.Router();

const person = require('./../models/person');


router.post('/', async (req, res) => {

    // const data = req.body

    // const newPerson = new person(data);
    // // newPerson.name = data.name;
    // // newPerson.age = data.age;
    // // newPerson.work = data.work;
    // // newPerson.salary = data.salary;
    // // newPerson.email = data.email;
    // // newPerson.address = data.address;
    // // newPerson.mobile = data.mobile;
    
    // newPerson.save((error, savedPerson)=>{
    //   if(error){
    //     console.log("Error saving person",error);
    //     res.status(500).json({error:'Internal server error'})
    //   }else{
    //     console.log("Data save Successfully");
    //     res.status(200).json(savedPerson)
    //   }
    // })

    try{
      const data = req.body

      const newPerson = new person(data);

      const response = await newPerson.save();
      console.log("Data saved");
      res.status(200).json(response)
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'})
    }


});

router.get("/", async (req, res)=>{
    try{
      const data1 = await person.find();
      console.log("Data Retrieve");
        res.status(200).json(data1)
  
    }catch(err){
      console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
  })

  router.get("/:work", async(req,res)=>{
    const workType = req.params.work;
    try{
  
      if(workType == "chef" || workType == "waiter" || workType == "manager"){
        const data = await person.find({work:workType});
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

  router.put("/:id", async (req,res)=>{
    const personId =  req.params.id;
    const updatePerson = req.body;

    try{
        const response = await person.findByIdAndUpdate(personId, updatePerson, {
            new: true,  // Return the updated document
            runValidators: true   // Run mongoose validation
        })

        if (!response) {
           return res.status(404).json({ error: 'Data Not Found' });
        }

        console.log("Record Updated");
        res.status(200).json({response});


    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})    
    }

  })

  router.delete("/:id", async (req,res)=>{
    const personId = req.params.id;

    try{

        const dataDelete = await person.findByIdAndDelete(personId);

         if (!dataDelete) {
            return res.status(404).json({ error: 'Data Not Found' });
        }
 
         console.log("Record Deleted");
         res.status(200).json({message: 'Data Deleted'});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})    
    }
  })

  module.exports = router;