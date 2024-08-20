const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const PORT= 8000
app.use(bodyParser.json())

const users = [
    {
      id:1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
    },
    {
      id:2,
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alicesmith@example.com',
    },
  ];

const getData =(req,res)=>{
    res.json(users,201)
}

const getIndividualData =(req,res)=>{
    const {id} = req.params
    const filtered = users.filter((item)=>item.id == id)
    // const filterIndex = users.findIndex((item)=>item.id == id)
   
    res.json(filtered)
    // res.json(filterIndex)
}

app.get('/',getData)
app.get('/:id',getIndividualData)

app.listen(PORT,(error,success)=>{
    if(error){
        console.log(error)
        return
    }
    console.log(`server is running on port ${PORT}`)
})
