// $(".content").hide();
// 获取id
var h = location.href;
h = h.split("=");
var id = h[1];
(function() {
  //文章内容
  if (id) {
    $.get("/cons.html?id=" + id, function(data) {
      $("#_content").html(data.html);
      $("#_title").html(data.name);
      $("title").html(data.name + "--屈鑫的个人博客");
      $("#_kind").html(data.kind);
      $("#tags").html(data.kind);
      $("#_optime").html(data.optime);
      $("#seenum").html(data.seenum);
      // console.log(data.msgnum)
      if (data.msgnum) {
        $("#msgnum").html(data.msgnum);
      } else {
        $("#msgnum").html("0");
      }
      add_artcle_list();
    });
  }
})();
$("body").show();
// 相关推荐
if (id) {
  $.get("/recommend.html?id=" + id, function(data) {
    var html = template("mylist", { list: data });
    $("#_command").html(html);
  });
  // 评论
  $("#comment-submit").on("click", function() {
    _msg();
  });
  
}
// 定义保存评论的函数
function _msg() {
  var _date = new Date();
  var _date = _date.toLocaleString();
  // console.log(_date)
  var datas = {
    name: $("#msg_name").val(),
    con: $("#comment-textarea").val(),
    txt_id: id,
    date: _date
  };
  $.post("comment_save.html", datas, function(data) {
    // console.log(data);
    if (data == "1") {
      _showmsg();
    } else {
      alert("保存失败!");
    }
  });
}
//定义显示评论的函数
function _showmsg() {
  var title = $("#_title").val();
  console.log(title);
  $.get("/show_msg.html?id=" + id, function(data) {
    var html = template("msglist", { msglist: data });
    $("#_msgcon").html(html);
  });
}
// 跳转主页
if (id) {
  _showmsg();
} else {
  location.href = "/index.html";
}

// 目录设置
    function add_artcle_list(){
        var titlelist = $("h3");
        var html = "";
        var num = [];
        for(var i = 0 ;i<titlelist.length;i++){
            var _txt = titlelist[i].innerHTML;
            html+="<li>"+ _txt+"</li>";
            var top = titlelist[i].offsetTop;
            num.push(top);
        }
        $(".article-list").html(html);
        pointlist();
        function pointlist(){
            $(".article-list li").on("click",function(){
                var index =  $(".article-list li").index(this);
                // console.log(index)
                $("body").scrollTop(num[index]-80)
            })
        }
    }; 

 
