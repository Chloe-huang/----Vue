let http=require('http');
//协议 端口  主机名 有一个不一致都会导致跨域问题
//cors 服务端配置允许前端跨域
//jsonp  服务端返回一个方法执行 只能发送get请求
//iframe跨域  postMessage
//window.name

//nginx
//webpack 实现跨域  上线后配置失效
let url=require('url');
http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/jsonp'){
     let sc={name:'aaa'};
     res.end(`${query.cb}(${JSON.stringify(sc)})`);
  }

}).listen(3000);
