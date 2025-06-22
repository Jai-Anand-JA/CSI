import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Entry from './model/Entry.js'

dotenv.config()
const app=express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>console.log('MongoDB connected'))
  .catch(err=>console.error('MongoDB connection error:',err))

// Create
app.post('/entries',async(req,res)=>{
  try{
    const entry=new Entry(req.body)
    const saved=await entry.save()
    res.status(201).json(saved)
  }catch(err){
    res.status(400).json({error:err.message})
  }
})

// Read all
app.get('/entries',async(req,res)=>{
  try{
    const entries=await Entry.find()
    res.json(entries)
  }catch(err){
    res.status(500).json({error:err.message})
  }
})

// Read by ID
app.get('/entries/:id',async(req,res)=>{
  try{
    const entry=await Entry.findById(req.params.id)
    if(entry)res.json(entry)
    else res.status(404).json({error:'Entry not found'})
  }catch(err){
    res.status(500).json({error:err.message})
  }
})

// Update
app.put('/entries/:id',async(req,res)=>{
  try{
    const updated=await Entry.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(updated)res.json(updated)
    else res.status(404).json({error:'Entry not found'})
  }catch(err){
    res.status(400).json({error:err.message})
  }
})

// Delete
app.delete('/entries/:id',async(req,res)=>{
  try{
    const deleted=await Entry.findByIdAndDelete(req.params.id)
    if(deleted)res.json({message:'Entry deleted'})
    else res.status(404).json({error:'Entry not found'})
  }catch(err){
    res.status(500).json({error:err.message})
  }
})

app.listen(process.env.PORT,()=>console.log(`Server running on port ${process.env.PORT}`))
