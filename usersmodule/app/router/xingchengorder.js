
const express = require('express')

const router = express.Router()

const {Xingchengorder} = require('../model/mode')


//获取行程订单列表
router.get('/',async (req,res)=>{
  const list = await Xingchengorder.find()
  res.send(list)
})

//报名下单(相当于插入数据)
router.post('/order',async (req,res)=>{
  // console.log(req.body.iid);
  const xingchengorder = await Xingchengorder.findOne({iid:req.body.iid})
  if(xingchengorder){
    return res.status(409).send('请勿重复报名!')
  }else {
    const newOrder = await new Xingchengorder(req.body).save()
    res.send(newOrder)
  }
})
//修改订单status
router.post('/editstatus',async (req,res)=>{
  const oldorder = Xingchengorder.findOne({iid:req.body.iid})
  var neworder = Xingchengorder.findOne({iid:req.body.iid})
  neworder.status = 'true'
  const xingchengorder = await Xingchengorder.updateOne(oldorder, {$set:neworder})
  if(xingchengorder){
    res.send(xingchengorder)
  }
})
//删除订单
router.post('/delete',async (req,res)=>{
  const isdelete = await Xingchengorder.deleteOne({iid:req.body.iid})
  if(isdelete){
    res.send(isdelete)
  }
})
//删除所有订单
router.post('/deleteall',async (req,res)=>{
  const isdelete = await Xingchengorder.remove({})
  if(isdelete){
    res.send(isdelete)
  }
})
module.exports = router