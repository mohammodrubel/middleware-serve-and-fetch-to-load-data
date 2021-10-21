const express = require ('express')
var cors = require('cors')
const app = express ()
app.use(cors())

const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('welcome to my website')
})

const users = [{id:1,name:'Muhammad Rubel',location:'DHaka,khilgaon',country:'Bangladesh',email:'Rubel@gmail.com',phone:'01687665298'},  
{id:2,name:'fardin tazbeed',location:'DHaka,bashaboo',country:'india',email:'fardin@gmail.com',phone:'01689398768'},    
{id:3,name:'abdul hamid',location:'DHaka,shiddeshori',country:'south africa',email:'abdul@gmail.com',phone:'01689898298'},    
{id:4,name:'emrul hasan',location:'DHaka,madartek',country:'poland',email:'emrul@gmail.com',phone:'01689365690'},
{id:5,name:'nafis nao',location:'DHaka,baily road',country:'France',email:'nafis@gmail.com',phone:'016893112348'},
{id:6,name:'abdul hashem',location:'DHaka,shahabag',country:'spain',email:'hashem@gmail.com',phone:'01689354348'},
{id:7,name:'abdul kashem',location:'DHaka,mirpur',country:'London',email:'kashem@gmail.com',phone:'01689360009'}  ]


app.get('/users',(req,res)=>{
    const search = req.query.search
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }else{
        res.send(users)
    }
    
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/users/amar/nam',(req,res)=>{
    res.send('valolage na ')
})

app.listen(port,()=>{
    console.log('hello world')
})