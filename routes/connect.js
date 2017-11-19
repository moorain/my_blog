var mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/blog',function(err){
    if(err){
        throw err;
    }else{
        console.log("数据库已经连接.......")
    }
})
module.exports = mongoose;