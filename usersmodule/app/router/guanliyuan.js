
const express = require('express')

const router = express.Router()


//注意这个{User}的写法
const {Guanliyuan} = require('../model/mode')


//获取用户列表
router.get('/',async (req,res)=>{
  const list = await Guanliyuan.find()
  res.send(list)
})

//注册
router.post('/register',async (req,res)=>{
  console.log(req.body.username);
  const user = await Guanliyuan.findOne({username:req.body.username})
  if(user){
    return res.status(409).send('该用户已存在!')
  }else {
    const newUser = await new Guanliyuan(req.body).save()
    res.send(newUser)
  }

})
//登录
router.post('/login',async (req,res)=>{
  //1.查询用户是否存在
  const user = await Guanliyuan.findOne({username:req.body.username})
  if(!user){
    return res.status(422).send('该用户不存在')
  }
  //2.用户存在判断密码
  if(req.body.password !==user.password){
    return res.status(422).send('密码错误')
  }else {
    const token = user._id + '.' +user.username
    res.send(token)
  }

})
//删除
router.post('/delete',async (req,res)=>{
  const deleteUser = await Guanliyuan.deleteOne({_id:req.body._id})
  if(deleteUser){
    res.send(deleteUser)
  }
})
//修改
router.post('/edit',async (req,res)=>{
  console.log(req.body);
  const oldguanliyuan = await Guanliyuan.findOne({_id:req.body._id})
  var newguanliyuan = await Guanliyuan.findOne({_id:req.body._id})
  newguanliyuan.username = req.body.username
  newguanliyuan.password = req.body.password
  const editGuanliyuan =await Guanliyuan.updateOne(oldguanliyuan,{$set:newguanliyuan})
  if(editGuanliyuan){
    res.send(editGuanliyuan)
  }
})


// //验证
// router.get('/verify',async (req,res)=>{
//   console.log(req.headers.authorization)
//   //1.获取token
//   const token = req.headers.authorization.split(' ')[1]
//   const id = token.split('.')[0]
//   const name = token.split('.')[1]
//   console.log(id,name)
//   //2.查询用户是否存在
//   const user = await User.findById(id)
//   if(!user){
//     res.status(422).send('用户错误！')
//   }
//   //3.查看zhanghao
//   if(name !== user.zhanghao){
//     res.status(422).send('用户错误')
//   }
// })
module.exports = router