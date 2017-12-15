var express = require('express');
var router = express.Router();
var markdown = require('markdown-js'); 
var fs = require('fs');
var mongoose = require('./connect.js')


var textSchema = new mongoose.Schema({
    "name":String,
    "con":String,  
    "author": String,
    "kind": String,
    "optime": String,
    "seenum":String,
    "msgnum":String
})

// 发布模型
var txtModel= mongoose.model('con',textSchema,'con');

// 后台管理保存文章
router.post('/con_save.html',function(req,res){
    var name = req.body.name;
    var con = req.body.con;
    var author = req.body.author;
    var kind = req.body.kind;
    var optime = req.body.optime;
    //定义一个实例
    var conmodel  = new txtModel();
    conmodel.name = name;
    conmodel.con = con;
    conmodel.author = author;
    conmodel.kind = kind;
    conmodel.optime = optime;
    conmodel.seenum = 0;
    conmodel.msgnum = 0;

    conmodel.save(function(err){
        if(err){
            res.send('0')
        }else{
            res.send("1")
        }
    })

})

// 后台管理渲染文章列表
router.get('/addlist.html',function(req,res){
    txtModel.find({}).sort({"optime":1}).exec(function(err,data){
        res.send(data);
    })
})

// ejs文章列表渲染
router.get('/category.html',function(req,res){
    txtModel.find({}).sort({"optime":-1}).exec(function(err,data){
        res.render('articlelist', {
            datas:data
        });
    })
})


// post页面渲染
router.get('/cons.html',function(req,res){
    var id = req.query.id;
    if(id != ""){
    txtModel.findById(id,function(err,data){
        //对象保存给that 避免冲突
        var that = data;
        var datas = {};
        var html = markdown.makeHtml(data.con);
        datas.html = html;
        datas.name = data.name;
        datas.optime = data.optime;
        datas.kind = data.kind;
        datas.seenum = data.seenum;
        var _msgnum = 0;//评论数量
        // 查看数自增
        var seenum = data.seenum;
        seenum++;
        msgModel.find({"txtid":id},function(err,data){//找到该文章下的评论
            _msgnum = data.length;
            datas.msgnum = data.length;

            //res.send(datas);//发送
            //
            res.render('article', {
                eassydata:datas
            });


            // 保存浏览数和评论数到文章数据库中
            that.msgnum = _msgnum;
            that.seenum = seenum;
            that.save(function(err){
                if(err){
                    throw err;
                }else{
                }
            })
        }) 
    })
    }else{
        redirect("/index.html")
    }
})
// 后台管理删除 修改文章
// 删除
router.get('/article_delete.html',function(req,res){
    var id = req.query.id;
    txtModel.findById(id,function(err,data){
        data.remove(function(err){
            // console.log("111")
            res.redirect('/admin/moorain.html')
            res.end()
        });
    })
})
//回填_修改
router.get('/artile_edit.html',function(req,res){
    var id = req.query.id;
    txtModel.findById(id,function(err,data){
       res.send(data);
    })
})

// 保存修改
// con_edit_save
router.post('/con_edit_save.html',function(req,res){
    var name = req.body.name;
    var con = req.body.con;
    var author = req.body.author;
    var kind = req.body.kind;
    var optime = req.body.optime;
    var id = req.body.id;
    txtModel.findById(id,function(erre,data){
        data.name = name;
        data.con = con;
        data.author = author;
        data.kind = kind;
        data.optime = optime;
        data.save(function(err){
            res.redirect('./admin/moorain.html')
        })
    })
})

// 主页分类 kind
router.get('/kind_list.html',function(req,res){
    var kind = req.query.kind;
    txtModel.find({"kind":kind}).exec(function(err,data){
        res.send(data);
    })
})


// 文章页：

// 相关推荐
router.get('/recommend.html',function(req,res){
    var id = req.query.id;
    txtModel.findById(id,function(err,data){
       var kind = data.kind;
       txtModel.find({"kind":kind}).exec(function(err,data){
           res.send(data);
       })
    })
})

// 评论保存
var msgSchema = new mongoose.Schema({
    "name":String,
    "con":String,  
    "date":String,  
    "floor":String, 
    "txtid":String // 该评论所对应的id
})

// 发布模型
var msgModel= mongoose.model('msg',msgSchema,'msg');

// 获取保存评论的请求
router.post('/comment_save.html',function(req,res){
    var txtid = req.body.txt_id;
    var name = req.body.name;
    var con = req.body.con;
    var date = req.body.date;
    msgModel.find({"txtid":txtid}).exec(function(err,data){
       thisfloor = data.length+1;
       var msg = new msgModel();
       msg.name = name;
       msg.con = con;
       msg.date = date;
       msg.txtid = txtid;
       msg.floor = thisfloor;
       msg.save(function(err){
           if(err){
               throw err;
           }else{
                res.send("1");
           }
       })
    })
})
// 显示评论的请求
router.get('/show_msg.html',function(req,res){
    var txtid = req.query.id;
    msgModel.find({"txtid":txtid}).exec(function(err,data){
        res.send(data);
    })
})

// 搜索结果
router.get('/search-content.html',function(req,res){
    var name = req.query.name;
    var obj = {};
    obj.name = new RegExp(name);//正则表达式模糊查询
    txtModel.find(obj).exec(function(err,data){
        res.send(data);
    })
})


// 后台管理
// 后台管理评论
router.get('/admin_show_msg.html',function(req,res){
    msgModel.find({}).exec(function(err,data){
        res.send(data);
    })
})
// 后台管理评论删除
router.get('/delete_msg.html',function(req,res){
    var id = req.query.id;
    msgModel.findById(id,function(err,data){
        data.remove(function(err){
            console.log("delete msg is success....")
            res.redirect('/admin/msg.html')
        })
    })
})

/* GET home page. */
// ejs渲染主页
router.get('/', function(req, res, next) {
    txtModel.find({}).sort({"optime":-1}).limit(8).exec(function(err,data){
       /*  for(var i = 0;i<data.length;i++){
            data[i].con = markdown.makeHtml(data[i].con);
        } */
        res.render('index', {
            datas:data
        });
    })
  });

// ejs渲染文章
router.get('/article.html',function(req,res){
    var id = req.query.id;
    if(id){
    txtModel.findById(id,function(err,data){
        //对象保存给that 避免冲突
        var that = data;
        var datas = {};
        var html = markdown.makeHtml(data.con);
        datas.html = html;
        datas.name = data.name;
        datas.optime = data.optime;
        datas.kind = data.kind;
        datas.seenum = data.seenum;
        var _msgnum = 0;//评论数量
        // 查看数自增
        var seenum = data.seenum;
        seenum++;
        msgModel.find({"txtid":id},function(err,data){//找到该文章下的评论
            _msgnum = data.length;
            datas.msgnum = data.length;

            //res.send(datas);//发送
            //
            res.render('article', {
                eassydata:datas
            });
            // 保存浏览数和评论数到文章数据库中
            that.msgnum = _msgnum;
            that.seenum = seenum;
            that.save(function(err){
                if(err){
                    throw err;
                }else{
                }
            })
        }) 
    })
    }else{
        redirect("./")
    }
})

module.exports = router;
