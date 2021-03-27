const mongoose = require('mongoose')

const Schema = mongoose.Schema
const model = mongoose.model

//定义user数据schema
const UserSchema = new Schema({
  zhanghao:{type:String,require:true},
  password:{type:String,require:true}
})
//定义行程订单数据schema
const XingchengOrderSchema = new Schema({
  iid:{type:String,require:true},
  img:{type:String,require:true},
  title:{type:String,require:true},
  price:{type:String,require:true},
  chuxingdate:{type:String,require:true},
  orderdate:{type:String,require:true},
  status:{type:String,require:true}
})
//定义商品数订单schema
const GoodsOrderSchema = new Schema({
  iid:{type:String,require:true},
  img:{type:String,require:true},
  title:{type:String,require:true},
  price:{type:String,require:true},
  orderdate:{type:String,require:true},
})
//定义管理员信息schema
const GuanliyuanSchema = new Schema({
  username:{type:String,require:true},
  password:{type:String,require:true}
})

//定义一两天Schema
const YiliangtianSchema = new Schema({
  text:{type:String,require:true},
  src:{type:String,require:true},
  localname:{type:String,require:true},
  price:{type:String,require:true},
})

//定义经典长线Schema
const JingdianchangxianSchema = new Schema({
  text:{type:String,require:true},
  src:{type:String,require:true},
  localname:{type:String,require:true},
  price:{type:String,require:true},
})
//定义赏春活动Schema
const ShangchunhuodongSchema = new Schema({
  text:{type:String,require:true},
  src:{type:String,require:true},
  localname:{type:String,require:true},
  price:{type:String,require:true},
})


//定义常用装备Schema
const ChangyongzhuangbeiSchema = new Schema({
  title:{type:String,require:true},
  price:{type:String,require:true},
  shoucang:{type:String,require:true},
  src:{type:String,require:true},
  oldprice:{type:String,require:true},
  // swiper:{type:Array,require:true},
  cell:{type:String,require:true},
  dsc:{type:String,require:true},
  arg:{type:String,require:true},
})

//定义能量饮料Schema
const NengliangyinliaoSchema = new Schema({
  title:{type:String,require:true},
  price:{type:String,require:true},
  shoucang:{type:String,require:true},
  src:{type:String,require:true},
  oldprice:{type:String,require:true},
  // swiper:{type:Array,require:true},
  cell:{type:String,require:true},
  dsc:{type:String,require:true},
  arg:{type:String,require:true},
})

const User = model('User',UserSchema,'users')
const Xingchengorder = model('Xingchengorder',XingchengOrderSchema,'xingchengorder')
const Goodsorder = model('Goodsorder',GoodsOrderSchema,'goodsorder')
const Guanliyuan = model('Guanliyuan',GuanliyuanSchema,'guanliyuan')
const Yiliangsan = model('Yiliangsan',YiliangtianSchema,'allyiliangsan')
const Jingdianchangxian = model('Jingdianchangxian',JingdianchangxianSchema,'alljingdianchangxian')
const Shangchunhuodong = model('Shangchunhuodong',ShangchunhuodongSchema,'allshangchunhuodong')
const Changyongzhuangbei = model('Changyongzhuangbei',ChangyongzhuangbeiSchema,'changyongzhuangbei')
const Nengliangyinliao = model('Nengliangyinliao',NengliangyinliaoSchema,'nengliangyinliao')

module.exports = {
  User: User,
  Xingchengorder:Xingchengorder,
  Goodsorder:Goodsorder,
  Guanliyuan:Guanliyuan,

  Yiliangsan:Yiliangsan,
  Jingdianchangxian:Jingdianchangxian,
  Shangchunhuodong:Shangchunhuodong,

  Changyongzhuangbei:Changyongzhuangbei,
  Nengliangyinliao:Nengliangyinliao,
}