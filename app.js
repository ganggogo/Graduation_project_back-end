

const mime = require('mime-types'); //需npm安装


var Koa = require('koa')
    router = require('koa-router')()
    path = require('path')
    fs = require('fs');
    bodyParser = require('koa-bodyparser')
    DB = require('./module/db')


var app = new Koa()


// 引入静态资源中间件，静态web服务
const staticResource = require('koa-static')
//配置静态资源中间件
app.use(staticResource(path.join(__dirname,'static')))

// const cors = require('koa2-cors'); //跨域处理
//配置跨域问题
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});

//配置读取图片
// app.use(async (ctx) => {
//
//   let filePath = path.join(__dirname, ctx.url); //图片地址
//   let file = null;
//   try {
//     file = fs.readFileSync(filePath); //读取文件
//   } catch (error) {
//     //如果服务器不存在请求的图片，返回默认图片
//     filePath = path.join(__dirname, '/images/default.png'); //默认图片地址
//     file = fs.readFileSync(filePath); //读取文件
//   }
//
//   let mimeType = mime.lookup(filePath); //读取图片文件类型
//   ctx.set('content-type', mimeType); //设置返回类型
//   ctx.body = file; //返回图片
//
// });

//显示首页swiper
router.get('/swiperimgs',async (ctx)=>{

  var result = await DB.find('swiperimgs',{})

  ctx.body = result

})

//显示首页一两天
router.get('/yiliangsan',async (ctx)=>{

  var result = await DB.find('yiliangsan',{})

  ctx.body = result

})
//显示首页一两天all
router.get('/allyiliangsan',async (ctx)=>{

  var result = await DB.find('allyiliangsan',{})

  ctx.body = result

})
//显示首页经典长线
router.get('/jingdianchangxian',async (ctx)=>{

  var result = await DB.find('jingdianchangxian',{})

  ctx.body = result

})
//显示首页经典长线all
router.get('/alljingdianchangxian',async (ctx)=>{

  var result = await DB.find('alljingdianchangxian',{})

  ctx.body = result

})
//显示首页赏春活动
router.get('/shangchunhuodong',async (ctx)=>{

  var result = await DB.find('shangchunhuodong',{})

  ctx.body = result

})
//显示  all赏春活动
router.get('/allshangchunhuodong',async (ctx)=>{

  var result = await DB.find('allshangchunhuodong',{})

  ctx.body = result

})
//显示首页最美照片
router.get('/zuimeizhaopian',async (ctx)=>{

  var result = await DB.find('zuimeizhaopian',{})

  ctx.body = result

})
//显示  最美照片swiper
router.get('/zuimeiphotoswiper',async (ctx)=>{

  var result = await DB.find('zuimeiphotoswiper',{})

  ctx.body = result

})
//显示  最美照片box
router.get('/zuimeiphotobox',async (ctx)=>{

  var result = await DB.find('zuimeiphotobox',{})

  ctx.body = result

})
//显示  猜你喜欢
router.get('/cainixihuan',async (ctx)=>{

  var result = await DB.find('cainixihuan',{})

  ctx.body = result

})
//显示  all猜你喜欢
router.get('/allcainixihuan',async (ctx)=>{

  var result = await DB.find('allcainixihuan',{})

  ctx.body = result

})

//行程detail
router.get('/xingchengdetail/604ce5ed76fb31cd50f9e907',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604ce5ed76fb31cd50f9e907')})

  ctx.body = result

})

router.get('/xingchengdetail/604ce8ef76fb31cd50f9e909',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604ce8ef76fb31cd50f9e909')})

  ctx.body = result

})

router.get('/xingchengdetail/604ce94b76fb31cd50f9e90a',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604ce94b76fb31cd50f9e90a')})

  ctx.body = result

})
router.get('/xingchengdetail/604cea1176fb31cd50f9e90b',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604cea1176fb31cd50f9e90b')})

  ctx.body = result

})
router.get('/xingchengdetail/604cebec76fb31cd50f9e90c',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604cebec76fb31cd50f9e90c')})

  ctx.body = result

})
router.get('/xingchengdetail/604cfae076fb31cd50f9e918',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604cfae076fb31cd50f9e918')})

  ctx.body = result

})
router.get('/xingchengdetail/604cec3c76fb31cd50f9e90d',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604cec3c76fb31cd50f9e90d')})

  ctx.body = result

})
router.get('/xingchengdetail/604dea0976fb31cd50f9e91e',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604dea0976fb31cd50f9e91e')})

  ctx.body = result

})
router.get('/xingchengdetail/604dea6176fb31cd50f9e91f',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604dea6176fb31cd50f9e91f')})

  ctx.body = result

})
router.get('/xingchengdetail/604deb6576fb31cd50f9e920',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604deb6576fb31cd50f9e920')})

  ctx.body = result

})
router.get('/xingchengdetail/604dec6976fb31cd50f9e921',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604dec6976fb31cd50f9e921')})

  ctx.body = result

})
router.get('/xingchengdetail/604def8e76fb31cd50f9e922',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604def8e76fb31cd50f9e922')})

  ctx.body = result

})
router.get('/xingchengdetail/604e076876fb31cd50f9e924',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604e076876fb31cd50f9e924')})

  ctx.body = result

})
router.get('/xingchengdetail/604e0b6176fb31cd50f9e925',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604e0b6176fb31cd50f9e925')})

  ctx.body = result

})
router.get('/xingchengdetail/604e107c76fb31cd50f9e927',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604e107c76fb31cd50f9e927')})

  ctx.body = result

})
router.get('/xingchengdetail/604e114876fb31cd50f9e928',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604e114876fb31cd50f9e928')})

  ctx.body = result

})
router.get('/xingchengdetail/604e136b76fb31cd50f9e929',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604e136b76fb31cd50f9e929')})

  ctx.body = result

})
router.get('/xingchengdetail/604cfbc776fb31cd50f9e91a',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604cfbc776fb31cd50f9e91a')})

  ctx.body = result

})
router.get('/xingchengdetail/604cfc8376fb31cd50f9e91b',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604cfc8376fb31cd50f9e91b')})

  ctx.body = result

})
router.get('/xingchengdetail/604cfd0a76fb31cd50f9e91c',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('xingchengdetail',{"_id":DB.getObjectID('604cfd0a76fb31cd50f9e91c')})

  ctx.body = result

})

//常用装备
router.get('/changyongzhuangbei',async (ctx)=>{

  var result = await DB.find('changyongzhuangbei',{})

  ctx.body = result

})
//常用装备topswiper
router.get('/changyongzhuangbeitopswiper',async (ctx)=>{

  var result = await DB.find('changyongzhuangbeitopswiper',{})

  ctx.body = result

})
//能量饮料
router.get('/nengliangyinliao',async (ctx)=>{

  var result = await DB.find('nengliangyinliao',{})

  ctx.body = result

})

router.get('/goodsdetail/604f57b1be1d66bc8eea02e7',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('changyongzhuangbei',{"_id":DB.getObjectID('604f57b1be1d66bc8eea02e7')})

  ctx.body = result

})
router.get('/goodsdetail/604f81a7be1d66bc8eea02ec',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('changyongzhuangbei',{"_id":DB.getObjectID('604f81a7be1d66bc8eea02ec')})

  ctx.body = result

})
router.get('/goodsdetail/604f8512be1d66bc8eea02ee',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('changyongzhuangbei',{"_id":DB.getObjectID('604f8512be1d66bc8eea02ee')})

  ctx.body = result

})
router.get('/goodsdetail/604f87f4be1d66bc8eea02ef',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('changyongzhuangbei',{"_id":DB.getObjectID('604f87f4be1d66bc8eea02ef')})

  ctx.body = result

})
router.get('/goodsdetail/604f894abe1d66bc8eea02f0',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('changyongzhuangbei',{"_id":DB.getObjectID('604f894abe1d66bc8eea02f0')})

  ctx.body = result

})
router.get('/goodsdetail/604f8a92be1d66bc8eea02f1',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('changyongzhuangbei',{"_id":DB.getObjectID('604f8a92be1d66bc8eea02f1')})

  ctx.body = result

})
router.get('/goodsdetail/604f8c22be1d66bc8eea02f2',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('nengliangyinliao',{"_id":DB.getObjectID('604f8c22be1d66bc8eea02f2')})

  ctx.body = result

})
router.get('/goodsdetail/604f8d2bbe1d66bc8eea02f3',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('nengliangyinliao',{"_id":DB.getObjectID('604f8d2bbe1d66bc8eea02f3')})

  ctx.body = result

})
router.get('/goodsdetail/604f8ec5be1d66bc8eea02f5',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('nengliangyinliao',{"_id":DB.getObjectID('604f8ec5be1d66bc8eea02f5')})

  ctx.body = result

})
router.get('/goodsdetail/604f8f0ebe1d66bc8eea02f6',async (ctx)=>{

  // let id = ctx.query.id
  var result = await DB.find('nengliangyinliao',{"_id":DB.getObjectID('604f8f0ebe1d66bc8eea02f6')})

  ctx.body = result

})




//启动路由
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(9999)