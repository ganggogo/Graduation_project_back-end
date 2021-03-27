
const express = require('express')

const router = express.Router()

const {Goodsorder} = require('../model/mode')


//获取商品订单列表
router.get('/',async (req,res)=>{
  const list = await Goodsorder.find()
  res.send(list)
})

//加入购物车下单(相当于插入数据)
router.post('/order',async (req,res)=>{
  // console.log(req.body.iid);
  const goodsorder = await Goodsorder.findOne({iid:req.body.iid})
  if(goodsorder){
    return res.send('数量+1')
  }else {
    const newGood = await new Goodsorder(req.body).save()
    res.send(newGood)
  }

})
// 删除订单
router.post('/delete',async (req,res)=>{
  const isdelete = await Goodsorder.deleteOne({iid:req.body.iid})
  if(isdelete){
    res.send(isdelete)
  }
})
//删除所有订单
router.post('/deleteall',async (req,res)=>{
  const isdeleteall = await Goodsorder.remove({})
  if(isdeleteall){
    res.send(isdeleteall)
  }
})
module.exports = router