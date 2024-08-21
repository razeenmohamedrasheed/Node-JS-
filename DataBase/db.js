const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://razeenrasheed83:bjyhvg2ojt0YsalY@cluster0.ntrmq.mongodb.net/"

const connectionOptions = {
    useFindAndModify: false,
    useUnifiedTopology: true,
  };

  
//connection should be aviailable for all components
const connection = ()=>{
    return mongoose.createConnection(mongoURL,connectionOptions)
}

module.exports= {connection}