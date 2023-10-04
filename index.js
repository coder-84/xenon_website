const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();


require('./src/config/db');
require('./src/config/db1');



const User = require("./src/Modal/FormModel")
const contact = require("./src/Modal/FormModel1")

const viewpath = path.join(__dirname,'frontend/views');
const partialpath = path.join(__dirname,'frontend/partials');
const publicpath = path.join(__dirname,'frontend/public');

app.set('view engine', 'hbs');
app.set('views',viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));

app.get('/' , (req,res)=>
{
    res.render('index');
})

app.get('/services' , (req,res)=>
{
    res.render('services');
})


app.get('/login', (req,res)=>
{
    res.render('login');
})


app.get('/contact', (req,res)=>
{
    res.render('contact');
})

app.post("/submit", async(req, res)=>{
    const SaveUser = new User(req.body)
    await SaveUser.save()
    res.send("Data Save Successfully")

   
})
app.post("/contact", async(req, res)=>{
    const contact_SaveUser = new contact(req.body)
    await contact_SaveUser.save()
    res.send("Contact Data Save Successfully")

   
})


app.listen(7000, ()=>
{
    console.log('created');
})