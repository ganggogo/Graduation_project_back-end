const express = require('express')

const router = express.Router()
// const mongoose = require('mongoose');


//注意这个{User}的写法
const {Yiliangsan} = require('../model/mode')

//获取列表
router.get('/',async (req,res)=>{
  const list = await Yiliangsan.find()
  res.send(list)
})

//添加
router.post('/register',async (req,res)=>{
  var addData = {}
  addData.text = req.body.text
  addData.src = req.body.src
  addData.localname = req.body.localname
  addData.price = req.body.price
  const newYiliangsan = await new Yiliangsan(addData).save()
  res.send(newYiliangsan)

})

//删除
router.post('/delete',async (req,res)=>{
  const deleteUser = await Yiliangsan.deleteOne({_id:req.body._id})
  if(deleteUser){
    res.send(deleteUser)
  }
})
//修改
router.post('/edit',async (req,res)=>{
  // console.log(req.body);
  const oldguanliyuan = await Yiliangsan.findOne({_id:req.body._id})
  // console.log(oldguanliyuan)
  var newuser = await Yiliangsan.findOne({_id:req.body._id})
  newuser.text = req.body.text
  newuser.src = req.body.src
  newuser.localname = req.body.localname
  newuser.price = req.body.price
  const editUser =await Yiliangsan.updateOne(oldguanliyuan,{$set:newuser})
  if(editUser){
    res.send(editUser)
  }
})

module.exports = router