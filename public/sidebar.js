var text = '<aside class="sidebar">\
    <div class="fixed">\
      <div class="widget widget-tabs">\
        <ul class="nav nav-tabs" role="tablist">\
          <li role="presentation" class="active"><a href="#notice" aria-controls="notice" role="tab" data-toggle="tab">网站公告</a></li>\
          <li role="presentation"><a href="#contact" aria-controls="contact" role="tab" data-toggle="tab">联系站长</a></li>\
        </ul>\
        <div class="tab-content">\
          <div role="tabpanel" class="tab-pane notice active" id="notice">\
            <ul>\
              <li>\
                <time datetime="2016-01-04">01-04</time>\
                <a href="" target="_blank">欢迎访问我的博客</a></li>\
            </ul>\
          </div>\
          <div role="tabpanel" class="tab-pane contact" id="contact">\
            <h2>Email:<br />\
              <a href="mailto:1062254476@qq.com" data-toggle="tooltip" data-placement="bottom" title="1062254476@qq.com">1062254476@qq.com</a></h2>\
          </div>\
        </div>\
      </div>\
      <div class="widget widget_search">\
        <form class="navbar-form" action="/Search" method="post">\
          <div class="input-group">\
            <input type="text" name="keyword" class="form-control" size="35" placeholder="请输入关键字" maxlength="15" autocomplete="off">\
            <span class="input-group-btn">\
            <button class="btn btn-default btn-search" name="search" type="submit">搜索</button>\
            </span> </div>\
        </form>\
      </div>\
    </div>\
    <div class="widget widget_sentence">\
      <h3>最近杂谈</h3>\
      <div class="widget-sentence-content">\
        <h4>2016年01月05日星期二</h4>\
        <p>Do not let what you cannot do interfere with what you can do.<br />\
          别让你不能做的事妨碍到你能做的事。（John Wooden）</p>\
      </div>\
    </div>\
  </aside>';

document.write(text)