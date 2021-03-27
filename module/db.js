
/*db库*/

var MongoDB = require('mongodb')

var MongoClient = MongoDB.MongoClient

var ObjectID = MongoDB.ObjectID

var Config = require('./config')

class Db{

  static getInstance(){//单例 只需要第一次连接耗时久  后面的都很快   解决多次实例化实例不共享问题

    if(!Db.instance){
      Db.instance = new Db()
    }

    return Db.instance
  }


  constructor() {

    this.dbClient = ''  //属性 放db对象
    this.connect()   //初始化的时候连接数据库

  }

  connect(){ //连接数据库

    return new Promise((resolve,reject)=>{

      if ( !this.dbClient ){  //解决数据库多次连接耗时长的问题
        MongoClient.connect(Config.dbUrl,{ useUnifiedTopology: true },(err,client)=>{

          if(err){

            reject(err)

          }else {

            console.log('服务器启动成功...')
            console.log('数据库连接成功...')

            this.dbClient = client.db(Config.dbName)


            resolve(this.dbClient)
          }


        })
      }else {

        resolve(this.dbClient)

      }

    })


  }

  find(collectionName,json){

    return new Promise((resolve,reject)=>{

      this.connect().then((db)=>{

        var result = db.collection(collectionName).find(json)

        result.toArray((err,docs)=>{

          if(err){

            reject(err)
            return
          }else {

            resolve(docs)
          }

        })

      })

    })

  }

  update(collectionName,json1,json2){

    return new Promise((resolve,reject)=>{

      this.connect().then((db)=>{

        //db.guanliyuan.update({},{$set:{}})
        db.collection(collectionName).updateOne(json1,{$set:json2},(err,result)=>{

          if(err){

            reject(err)

          }else {

            resolve(result)

          }

        })

      })

    })

  }

  insert(collectionName,json){

    return new Promise((resolve,reject)=>{

      this.connect().then((db)=>{

        db.collection(collectionName).insertOne(json,(err,result)=>{

          if ( err ){

            reject(err)

          }else {

            resolve(result)

          }

        })
      })
    })
  }
  remove(collectionName,json){

    return new Promise((resolve,reject)=>{

      this.connect().then((db)=>{

        db.collection(collectionName).removeOne(json,(err,result)=>{

          if ( err ){

            reject (err)
          }else {

            resolve(result)
          }
        })
      })

    })

  }

  getObjectID(id){  //mongodb里面查询_id把字符串转换为对象

    return new ObjectID(id)

  }

}

//实例化

// var myDb = Db.getInstance()
// console.time('start')
// myDb.find('guanliyuan',{}).then((data)=>{
//   console.timeEnd('start')
//   console.log(data)
// })

module.exports = Db.getInstance()