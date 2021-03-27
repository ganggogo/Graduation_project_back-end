const express = require('express')

const router = express.Router()


//注意这个{User}的写法
const {Jingdianchangxian} = require('../model/mode')

//获取列表
router.get('/',async (req,res)=>{
  const list = await Jingdianchangxian.find()
  res.send(list)
})

//添加
router.post('/register',async (req,res)=>{
  const newYiliangsan = await new Jingdianchangxian(req.body).save()
  res.send(newYiliangsan)

})

//删除
router.post('/delete',async (req,res)=>{
  const deleteUser = await Jingdianchangxian.deleteOne({_id:req.body._id})
  if(deleteUser){
    res.send(deleteUser)
  }
})
//修改
router.post('/edit',async (req,res)=>{
  console.log(req.body);
  const oldguanliyuan = await Jingdianchangxian.findOne({_id:req.body._id})
  var newuser = await Jingdianchangxian.findOne({_id:req.body._id})
  newuser.text = req.body.text
  newuser.src = req.body.src
  newuser.localname = req.body.localname
  newuser.price = req.body.price
  const editUser =await Jingdianchangxian.updateOne(oldguanliyuan,{$set:newuser})
  if(editUser){
    res.send(editUser)
  }
})

module.exports = router