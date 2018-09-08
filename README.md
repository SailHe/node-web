# Introduction

CPP - Node.js - Weex - Canvas
基于Node.js的Web项目


前导知识: Node.js; npm

打开终端

## 步骤一: 安装依赖
``` bash
npm install
```
若之前有缓存可尝试
``` bash
npm install --cache-min Infinity
```

## 步骤二: 启动
``` bash
npm start
```

此时应该自动打开网页


部署环境:
# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

安装好环境 并建好帐号 后对于一个试图部署到herku上的项目
1. 终端下进入项目目录
2. heroku git:remote -a sailhe (sailhe是自己账户下的app名)
3. git push heroku master

部署结果: https://sailhe.herokuapp.com/
