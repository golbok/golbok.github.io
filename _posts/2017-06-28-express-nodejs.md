---
layout: post
title: "(belajar) Express Web Framework - Node.js"
date:   2017-06-28 11:28:06 -0400
categories: post web
tags: [node, express]
comments: true
---

# Express
Express framework aplikasi web dari [node.js](https://nodejs.org/en/) minimal dan lebih flexible.

![express nodejs](https://nodejs.org/static/images/logo.svg)
<center class="caption"><small>node.js</small></center>

Sudah disediakan semua fitur baik itu untuk aplikasi web dan mobile.

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
## Testing "Hello World!"

Didalam file `app.js`:

``` javascript
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(8080, function () {
  console.log('Contoh Aplikasi di port 8080!, buka browser localhost:8080')
});
```
file tersebut menjelaskan, kita menggunakan paket dari `express` yang mana aplikasi `express` kita buat konstan dengan `app`.

routing index (default) yang dibuat nantinya mengirimkan kata 'Hello World!' dan dijalankan di port: 8080

Jalankan aplikasi:

``` bash
$ node app.js
Contoh Aplikasi di port 8080!, buka browser localhost:8080
|
```
buka port http://localhost:8080 di browser:

![express hello world](/assets/img/exp/h.png)

untuk lebih mudah dalam pembuatan aplikasi bisa dengan menggunakan *Express application generator*.

To be continued .. **Express application generator**


