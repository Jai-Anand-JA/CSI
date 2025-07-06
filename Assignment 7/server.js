const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()
const app=express()
app.use(express.json())

const users=[
  {id:1,username:'john',password:'pass123'},
  {id:2,username:'alice',password:'secret'}
]

// Login route: issues token
app.post('/login',(req,res)=>{
  const {username,password}=req.body
  const user=users.find(u=>u.username===username&&u.password===password)
  if(!user)return res.status(401).json({error:'Invalid credentials'})

  const token=jwt.sign({id:user.id,username:user.username},process.env.JWT_SECRET,{expiresIn:'1h'})
  res.json({token})
})

// Middleware to verify token
function authenticateToken(req,res,next){
  const authHeader=req.headers['authorization']
  const token=authHeader&&authHeader.split(' ')[1]
  if(!token)return res.sendStatus(401)

  jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if(err)return res.sendStatus(403)
    req.user=user
    next()
  })
}

app.get('/profile',authenticateToken,(req,res)=>{
  res.json({message:'Welcome to your profile',user:req.user})
})

app.listen(process.env.PORT,()=>console.log(`Server running on port ${process.env.PORT}`))
