let http=require('http');
let url=require('url');
let sliders=require('./db/sliders');
let fs=require('fs');
function getBook(cb) {
 fs.readFile('./db/book.json','utf8',function(err,data){
   if(err||data.length===0){
     cb([]);
   }
   else {
     cb(JSON.parse(data));
   }
 });
}
function writeBook(data,cb) {
  fs.writeFile('./db/book.json',JSON.stringify(data),cb);
}
http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/api/sliders'){

    res.end(JSON.stringify(sliders));
  }
  // else if(pathname==='/api/hot'){
  //   getBook(function (data) {
  //      res.end(JSON.stringify(data.reverse().slice(0,16)));
  //   });
  // }
  else if(pathname==='/api/book'){
    let id=parseInt(query.id);
    switch(req.method){
      case 'GET':
        if(id){
          //查询某一个
          getBook(function (books) {
           let book= books.find(item=>item.id===id);
           let result={book};
           if(book){
             result.err=0;//没有错误
           }else {
             result.err=1;
           }
           res.end(JSON.stringify(result));
          })
        }else {
          //查询所有
          getBook(function (data) {
            res.end(JSON.stringify(data.reverse()));
          })
        }
        break;
      case 'POST':
        //获取客户端传递过来的数据
        let str="";
        req.on('data',function (chunk) {
          str+=chunk;
        });
        req.on('end',function () {
          let book=JSON.parse(str);
         getBook(function (books) {
           book.id=books.length?books[books.length-1].id+1:1;
           books.push(book); //将获取的书和原有的拼在一起
           // console.log(book);
           writeBook(books,function () { //将写入到json中成功后返回添加后的那一项
             res.end(JSON.stringify(book));
           })
         })
        });
        break;
      case 'DELETE':
        if(id){
          getBook(function (books) {
            books=books.filter(item=>item.id!==id);
            writeBook(books,function () {
              res.end(JSON.stringify({}));
            });
          })
        }
        break;
      case 'PUT':
        if(id){
          let str='';
          req.on('data',function (chunk) {
            str+=chunk;
          });
          req.on('end',function () {
            let book=JSON.parse(str);
            getBook(function (books) {
              books=books.map(item=>{
                if(item.id===id){//找到ID相等的替换掉
                  return  book;
                }
                return item;
              })
              writeBook(books,function () {
                res.end(JSON.stringify(book));
              })
            });

          })
        }
        break;

    }
  }
}).listen(3000);
