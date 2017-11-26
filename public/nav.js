var text = '<nav class="navbar navbar-default" id="navbar">\
<div class="container">\
  <div class="header-topbar hidden-xs link-border">\
    <ul class="site-nav topmenu">\
      <!-- <li><a href="tags.html">标签云</a></li> -->\
      <!-- <li><a href="readers.html" rel="nofollow">读者墙</a></li> -->\
      <li><a href="links.html" rel="nofollow">留言</a></li>\
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" rel="nofollow">关注 <span class="caret"></span></a>\
        <ul class="dropdown-menu header-topbar-dropdown-menu">\
          <li><a data-toggle="modal" data-target="#WeChat" rel="nofollow"><i class="fa fa-weixin"></i>微信</a></li>\
          <li><a href="#" rel="nofollow"><i class="fa fa-weibo"></i>微博</a></li>\
          <li><a data-toggle="modal" data-target="#areDeveloping" rel="nofollow"><i class="fa fa-rss"></i> RSS</a></li>\
        </ul>\
      </li>\
    </ul>\
    <!-- <a data-toggle="modal" data-target="#loginModal" class="login" rel="nofollow">Hi,请登录</a>&nbsp;&nbsp;<a href="javascript:;" class="register" rel="nofollow">我要注册</a>&nbsp;&nbsp;<a href="" rel="nofollow">找回密码</a>  -->\
</div>\
  <div class="navbar-header">\
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar" aria-expanded="false"> <span class="sr-only"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>\
    <h1 class="logo hvr-bounce-in"><a href="index.html" title=""><img src="images/logo.png" alt=""></a></h1>\
  </div>\
  <div class="collapse navbar-collapse" id="header-navbar">\
    <ul class="nav navbar-nav navbar-left">\
      <li class = ""><a data-cont="首页" href="index.html">博客首页</a></li>\
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false" rel="nofollow">前端技术 <span class="caret"></span></a>\
      <ul class="dropdown-menu header-topbar-dropdown-menu">\
        <li><a href="category.html">文章列表</a></li>\
        <li><a href="share.html">我的分享</a></li>\
      </ul>\
    </li>\
      <li><a href="category.html">关于我</a></li>\
      <li><a href="/admin/login.html">后台管理</a></li>\
    </ul>\
    <!-- 搜索栏 -->\
    <form class="navbar-form visible-xs" action="/search_result.html" method="get">\
      <div class="input-group">\
        <input type="text" name="keyword" class="form-control" placeholder="请输入关键字" maxlength="20" autocomplete="off">\
        <span class="input-group-btn">\
        <button class="btn btn-default btn-search" name="search" type="submit">搜索</button>\
        </span>\
    </div>\
    </form>\
  </div>\
</div>\
</nav>'
document.write(text);