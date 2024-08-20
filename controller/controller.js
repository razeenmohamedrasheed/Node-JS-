const fs = require("fs");

const getFileData =()=>{
    const data = fs.readFileSync('./users/users.json')
    const JSONdata = JSON.parse(data.toString())
    return JSONdata 
}

const getUserData = async (request,response) =>{
    try{
       const res = getFileData()
       response.json(res)
    }catch(error){
        response.json("Internal Server error",500)
    }
}

const getInidivisualUserData = async (request,response) =>{

    try{
        const {first_name} = request.params
        const res = getFileData()
        const filtered = res.filter((item)=> item.first_name == first_name)
        response.json(filtered)
    }catch(error){
        response.json("Internal Server error",500)
    }
}

const deleteInidivisualUserData = async (request,response) =>{
    try{
        const {first_name} = request.params
        const res = getFileData()
        const filtered = res.filter((item)=> item.first_name != first_name)
        const responseJSON = JSON.stringify(filtered)
        fs.writeFileSync('./users/users.json',responseJSON)
        response.json("success")
    }catch(error){
        response.json("Internal Server error",500)
    }
}

const updateUserData = async(request,response)=>{
    const {first_name,last_name,email} = request.body
    try{
        const res = getFileData()
        const index = res.findIndex((item)=> item.first_name == first_name)
        // res[index]['first_name'] = first_name
        // res[index]['last_name'] = last_name
        // res[index]['email'] = email
        res[index] = {
            first_name,
            last_name,
            email
        }
        const responseJSON = JSON.stringify(res)
        fs.writeFileSync('./users/users.json',responseJSON)
        response.json("success")
        
        
        
    }catch(error){
        console.log(error)
    }
}

const createUserData = async (request,response) =>{
    const {first_name,last_name,email} = request.body
    try{
        const data = fs.readFileSync('./users/users.json')
        const JSONdata = JSON.parse(data.toString())
        JSONdata.push({
            first_name,
            last_name,
            email,
        }) 
        const responseJSON = JSON.stringify(JSONdata)
        fs.writeFileSync('./users/users.json',responseJSON)
        response.json("success")

    }catch(error){
        response.json("Internal Server error",500)
    }

}

module.exports ={
    getUserData,
    createUserData,
    getInidivisualUserData,
    deleteInidivisualUserData,
    updateUserData
}