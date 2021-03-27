
const express = require('express')
const bodyParser = require('body-parser')
const mongo = require('./config/db.js')
const cors = require('cors')
const userroutes = require('./router/userindex')
const xingchengorderroutes = require('./router/xingchengorderindex')
const goodsorderroutes =  require('./router/goodsorderindex')
const guanliyuanroutes =  require('./router/guanliyuanindex')
const yiliangsanroutes =  require('./router/yiliangsanindex')
const jingdianchangxianroutes =  require('./router/jingdianchangxianindex')
const shangchunhuodongroutes =  require('./router/shangchunhuodongindex')
const changyongzhuangbeiroutes =  require('./router/changyongzhuangbeiindex')
const nengliangyinliaoroutes =  require('./router/nengliangyinliaoindex')

const app = new express()
mongo(app)

app.use(cors())
//配置body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/user',userroutes)
app.use('/xingchengorder',xingchengorderroutes)
app.use('/goodsorder',goodsorderroutes)
app.use('/guanliyuan',guanliyuanroutes)
app.use('/yiliangsan',yiliangsanroutes)
app.use('/jingdianchangxian',jingdianchangxianroutes)
app.use('/shangchunhuodong',shangchunhuodongroutes)
app.use('/changyongzhuangbei',changyongzhuangbeiroutes)
app.use('/nengliangyinliao',nengliangyinliaoroutes)

// userroutes(app)
// xingchengorderroutes(app)

app.listen(8888)