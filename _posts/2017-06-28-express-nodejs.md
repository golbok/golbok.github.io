---
layout: post
title: "(belajar) Express Web Framework - Node.js"
date:   2017-06-28 11:28:06 -0400
categories: post web
tags: [node, express]
comments: true
---
# Express
Express framework aplikasi web yang dikembangkan oleh **TJ Holowaychuk**, dan dapat digunakan melalui [node.js](https://nodejs.org/en/), tampilan yang minimal dan lebih flexible.

![express nodejs](https://nodejs.org/static/images/logo.svg)
<center class="caption"><small>node.js</small></center>

Sudah disediakan semua fitur baik itu untuk aplikasi web dan mobile.

Penggunaan database bisa menggunakan **MongoDB and Mongoose** open-source, salah satunya **Mongoose** adalah client API untuk node.js.

<div class="alert alert-warning" role="alert">

  Untuk menggunakan Express sebelumnya harus mempunyai node.js yang sudah terinstall yang nantinya digunakan `npm` untuk instalasi express, <a class="alert-link" href="http://nodejs.org/download/" target="_blank">Download Node.js</a>

</div>

## Install Express App

- buat init json npm

```bash
$ npm init
```

``` bash
....
package name: (express-app) 
version: (1.0.0) 
description: 
entry point: (index.js) app.js
.....
```

- buat direktori aplikasi sesuai penamaan yang kita inginkan (contoh 'express-app'):

``` bash
// masuk ke direktori aplikasi
$ cd express-app
// install dengan command
$ npm install express --save
```
- Jika ingin menginstall secara *temporary* saja, maksudnya, tidak ditambahkan kedalam *list dependensi* cukup dengan:

``` bash 
$ npm install express --no-save 
```
- Untuk melihat apakah `express` framework sudah berada terinstall dilist dependensi, lihat didalam `package.json`

``` bash
$ cat package.json

{
  "name": "express-app",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "test-ex"
  },
  "author": "imam",
  "license": "ISC",
  "dependencies": {
    "express": "^4.15.3" // true
  }
}

```

### Install nodemon

nodemon untuk melihat log server yang sedang berjalan

``` bash
$ npm install -g nodemon
```

## Struktur folder

berikut struktur folder yang telah dibuat

``` bash
.
├── app.js
├── node_modules
│   └── ...
├── package.json
└── package-lock.json

```
## URL Building, Testing "Hello World!"

Didalam file `app.js`:

``` javascript
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(8080,['127.0.0.1'], function () {
  console.log('open http://localhost:8080')
});
```
file tersebut menjelaskan, kita menggunakan paket dari `express` yang mana aplikasi `express` kita buat, variable konstan dengan `app`.

routing index (default) yang dibuat nantinya mengirimkan kata 'Hello World!' dan dijalankan di port: 8080

Jalankan aplikasi:


bisa dijalankan dengan `node app.js` atau `nodemon app.js`

``` bash
$ nodemon app.js
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
open htpp://localhost:8080
...
```
buka port http://localhost:8080 di browser:

![express hello world](/assets/img/exp/h.png)

untuk lebih mudah dalam pembuatan aplikasi bisa dengan menggunakan *Express application generator*.

## HTTP Methods
Beberapa HTTP method yang diberikan dan digunakan digunakan ketika *client* melakukan *request* pada ExpressJS adalah **GET, POST, PUT** dan **DELETE**

#### Ref:

- [Expressjs](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Tutorialspoint](https://www.tutorialspoint.com)


