const mongoose  = require('mongoose')

const url = "mongodb://localhost:27017/hike"


module.exports = app =>{
  mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true },()=>{
    console.log('服务器启动成功...')
    console.log('数据库连接成功...')
  })
}