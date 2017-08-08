---
layout: post
title: "(belajar) Express Web Framework - Templating with pug"
date:   2017-06-29 24:28:06 -0400
categories: post web
tags: [node, express]
comments: false
---

## Pug

Sebelumnya sudah dibuat routing kebrowser, [di express web framework node js](https://immsswd.github.io/post/web/express-nodejs/)

Selanjutnya membuat views, menggunakan pug. (namanya suka-suka yang bikin)

**Template Engine**

Engine untuk membuat template static pada aplikasi yang akan kita buat. *Template Engine* ini nantinya mempermudah dalam membuat layout seperti HTML misalnya *engine* ini akan mengganti nilai variable didalam file template dengan dengan nilai variable aslinya, dengan variable yang dimiliki akan mengubah ke dalam bentuk HTML dan dikirimkan ke *client request*

Banyak jenis *template engine* untuk PHP misalnya ada ***Blade***, ***Smarty***, ***Twig*** dll.  

kalo di javascript misalnya seperti: ***[Moustache](https://mustache.github.io/)*** (bisa juga untuk yang lain), ***[Handlebars](http://handlebarsjs.com/)***, ***Dust***, ***doT***, dan salah satunya adalah ***PUG*** yang direkomendasikan di website express

Beberapa fitur dari *pug* seperti ***filters, includes, inheritance, interpolation*** dll.

## Install & Use

install dependesi dari pug melalui npm:

``` bash
$ npm install pug --save
```

Untuk penggunaan pug kita ndak perlu lagi bikin <mark>require</mark> seperti sebelumnya didalam file `app.js`, Express akan meminta sendiri modul yang dimaksud.

didalam file `app.js`

gunakan methd `set` namanya 'view engine' dan valuenya 'pug' seperti

``` javascript
app.set('view engine', 'pug');

app.set('views', './views');
```
buat folder views di root kemudian buat file `fview.pug` jdai **./views/fview.pug**

*fview.twig*

``` html
doctype html
html
  head
    title Hello wul
  body
    h2 Welcome to pug
    p.greet Hello Wul, I m pug, pug life!
    div
      | hello this -> sign | used to insert multiline
      | world
    div.
      But that gets tedious if you have a lot of text. You can use "." at the end of tag to denote block of text.
```

setelah dibuat, dibawah kode `set` dua diatas kita buat ruting, untuk melihat viewnya untuk *client*:

``` javascript
app.get('/lihatakudisini', function(req, res){
  res.render('fview');
});

```

### Run

kita jalankan di command servernya:

``` bash
$ nodemon app.js
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
http://localhost:4242
```
didalam file `fview.pug` akan di render seperti berikut:

``` html
<!DOCTYPE html>
<html>

<head>
    <title>Hello wul</title>
</head>

<body>
    <h2>Welcome to pug</h2>
    <p class="greet">Hello Wul, I m pug, pug life!</p>
    <div>hello this -> sign | used to insert multiline world
    </div>
    <div>But that gets tedious if you have a lot of text. You can use "." at the end of tag to denote block of text.</div>
</body>

</html>
```
![pug](/assets/img/exp/pugg.png)

## Passing nilai kedalam template


......

**berlanjut, mengantuk**.
