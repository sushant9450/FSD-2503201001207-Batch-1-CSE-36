const express=require('express')
const app=express();
app.get('/',(req,res)=>{
res.send('Hello everyone this is Sushant Singh');
});
app.listen(3000,()=>{
    console.log('Server runnng on http://localhost:3000');
});