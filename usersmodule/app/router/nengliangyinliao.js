const express = require('express')

const router = express.Router()
// const mongoose = require('mongoose');


//注意这个{User}的写法
const {Nengliangyinliao} = require('../model/mode')

//获取列表
router.get('/',async (req,res)=>{
  const list = await Nengliangyinliao.find()
  res.send(list)
})

//添加
router.post('/register',async (req,res)=>{
  var addData = {}
  addData.title = req.body.title
  addData.price = req.body.price
  addData.shoucang = req.body.shoucang
  addData.src = req.body.src
  addData.oldprice = req.body.oldprice
  // addData.swiper = req.body.swiper
  addData.cell = req.body.cell
  addData.dsc = req.body.dsc
  addData.arg = req.body.arg
  const newYiliangsan = await new Nengliangyinliao(addData).save()
  res.send(newYiliangsan)

})

//删除
router.post('/delete',async (req,res)=>{
  const deleteUser = await Nengliangyinliao.deleteOne({_id:req.body._id})
  if(deleteUser){
    res.send(deleteUser)
  }
})
//修改
router.post('/edit',async (req,res)=>{
  // console.log(req.body);
  const oldguanliyuan = await Nengliangyinliao.findOne({_id:req.body._id})
  // console.log(oldguanliyuan)
  var newuser = await Nengliangyinliao.findOne({_id:req.body._id})
  newuser.title = req.body.title
  newuser.price = req.body.price
  newuser.shoucang = req.body.shoucang
  newuser.src = req.body.src
  newuser.oldprice = req.body.oldprice
  // newuser.swiper = req.body.swiper
  newuser.cell = req.body.cell
  newuser.dsc = req.body.dsc
  newuser.arg = req.body.arg
  const editUser =await Nengliangyinliao.updateOne(oldguanliyuan,{$set:newuser})
  if(editUser){
    res.send(editUser)
  }
})

module.exports = router