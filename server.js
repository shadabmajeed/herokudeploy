const express=require('express')
const app=express()
const port=process.env.PORT||3000
app.listen(port,()=>{
   console.log("server started") 
})
const path=require('path')
app.use('/public',express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{res.send("hello ")})

