const express=require('express');
const app=express();
const cors=require('cors')
const port=process.env.PORT|| 5000;
const chefInfo=require('./data/chefInfo.json')
app.use(cors());
app.get('/',(req, res)=>{
    res.send('the chef started his cooking')
});

app.get('/chefInfo',(req, res)=>{
res.send(chefInfo)
})

app.get('/chefInfo/:id',(req, res)=>{
    const id=req.params.id;
    console.log(id);
    const selectedChef=chefInfo.find(n=>n.id==id)
res.send(selectedChef)
})



app.listen(port,()=>{
    console.log(`chef is cooking at port:${port}`);
})