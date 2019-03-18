const express = require('express')
// 系统路径模块
const path = require('path')
// const console = require('console')
// 用于对post请求的请求体进行解析
var bodyParser = require('body-parser');
var fs = require('fs');

const PORT = process.env.PORT || 5000

console.log("服务端日志");

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'));

console.log("服务端日志+1");



// ******************      https://blog.csdn.net/lzhlzz/article/details/55655612     *******************
// bodyParser.urlencoded解析form表单提交的数据
app.use(bodyParser.urlencoded({extended: false}));

// bodyParser.json解析json数据格式的
app.use(bodyParser.json());

app.post('/saveJSON',function(req, res){

    // 对象转换为字符串
    var str_json = JSON.stringify(req.body);    

    fs.writeFile('graph.json', str_json, 'utf8', function(){
        // 保存完成后的回调函数
        console.log("保存完成");
    });

});

// 定义一个post输出接口
app.post('/postJSONTest',function(req, res){
  // res.json({"a": "users"}); // obj = {a: 1,b: 2};
  // 同步读取本地json文件
  // let jsonBufferBin = fs.readFileSync('./public/JavaScript-Add-on/playground/table_related/batch_crud/station.json');
  let jsonBufferBin = fs.readFileSync('./public/test.json');
  // 以json格式输出
  res.json(jsonBufferBin.toString());
  console.log('post->postJSONTest');
  // console.log(jsonBufferBin.toJSON()); // 貌似还是二进制的
});

/*
Google Key : node 前端 异步请求 json文件
https://blog.csdn.net/lihefei_coder/article/details/81453716
*/
//设置允许跨域请求
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
  res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
  res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// 创建get接口
app.get('/api', function(req, res) {

  // @see https://i5ting.github.io/node-http/
  console.log("get->api 请求参数: ");
  // console.log(req.body); // post 才能用
  console.log(req.query);
  const reqFileName = req.query.fileName;

  // 文件路径，__dirname为当前运行js文件的目录
  var file = path.join(__dirname, './public/' + reqFileName);
  // 也可以用这种方式指定路径
  //var file = 'f:\\nodejs\\data\\test.json';

  // 异步读取json文件
  fs.readFile(file, 'utf-8', function(err, data) {
      if (err) {
          res.send('文件读取失败');
      } else {
          res.send(data);
      }
  });
});

// 创建post接口
app.post('/api', function(req, res) {

  console.log("post->api 请求参数: ");
  console.log(req.body);
  const reqFileName = req.body.fileName;

  var file = path.join(__dirname, './public/' + reqFileName);

  fs.readFile(file, 'utf-8', function(err, data) {
      if (err) {
          res.send('文件读取失败');
      } else {
          res.send(data);
      }
  });
});

// 创建post/接口
app.post('/api/', function(req, res) {

  console.log("post->api/ 请求参数: ");
  console.log(req.body);
  const reqFileName = req.body.fileName;

  var file = path.join(__dirname, './public/' + reqFileName);

  fs.readFile(file, 'utf-8', function(err, data) {
      if (err) {
          res.send('文件读取失败');
      } else {
          res.send(data);
      }
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
