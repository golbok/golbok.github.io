---
layout: post
title: "(belajar) Express Web Framework - Templating with pug"
date:   2017-06-29 24:11:08 -0400
categories: post web
tags: [node, express]
comments: true
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
buat folder views di root kemudian buat file `fview.pug` jadi **./views/fview.pug**

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

Ketika melakukan *render* pug template kita bisa melakukan *passing* nilai dari *route handler*

Didalam file `app.js` kita buatkan method `get` dari views yaitu 'dynamic.pug'

``` js
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/dynamic_view', function (req, res){
  res.render('dynamic',{
    nama  : "immsswd",
    url   : "https://immsswd.github.io"
  });
});
```

buat file `dynamic.pug` didalam direktori 'views' untuk membuat interpolasi memanggil variable gunakan **#{variable}**

``` html
html
   head
      title = name
   body
      h3 Hallo YTH kpd Saudara #{nama}
      a( href = url) url ditempel disini

```
## Conditionals

Menggunakan *statement looping*

buat routing get didalam `app.js`

``` js
.....
app.get('/dynamic_view', function (req, res){
  res.render('dynamic',{
    user: {
      nama  : "immsswd",
      url   : "https://immsswd.github.io"
    }
  });
});

```
didalam file **./views/dynamic.pug** buat seperti ini:

``` html
html
   head
      title=nama
   body
      if(user)
         h1 Hi, #{user.nama}
      else
         a(href = "/daftar" ) Daftar
      
```
### Include & Template menggunakan Bootstrap

Jangan lupa untuk membuat routernya terlebih dahulu gunakan method **static** untuk menentukan folder **public**, bisa dengan menggunakan `__dirname + '/public'` atau hanya `'public'` saja gunanya untuk menentukan asset yang diambil dari assets **bootstrap**:

```js

app.use(express.static(__dirname + '/public'));
// letakkan folder dan file css, fonts dan js dari paket bootstrap kedalam folder 'public'
app.get('/webku', function(req, res){
  res.render('content');
});
```

buat kontent `header.pug`, `content.pug` dan `footer.pug` didalama folder **./views**:

- file `header.pug`

``` html
nav.navbar.navbar-inverse.navbar-static-top
  div.container
    a.navbar-brand(href="#") Hallo
```
- file `content.pug`

``` html
html
  head
    title Judul Web
    link(rel="stylesheet" type="text/css" href="css/bootstrap.min.css")
  body
    include ./header.pug
    div.container
      div.row
        div.col-md-3
        div.col-md-6
          h2 ini adalah konten utama
          form
            h3 Please Login
            div.form-group
              label Username
              input.form-control(placeholder="Username")
            div.form-group
              label Password
              input.form-control(type="password" placeholder="Password")
            div.form-group
              input(type='checkbox')
              p Benar
            div.form-group
              button.btn.btn-info.btn-block.
                Login
        div.col-md-3
    include ./footer.pug
    // scripts
    script(src="js/jquery.min.js")
    script(src="js/bootstrap.min.js")
```
- file `footer.pug`

```html
footer.footer.nav-fixed-bottom
  center
    p Hallo footer &copy; footer
```
#### View:

![puglife](/assets/img/exp/vi.png)


#### Ref:

- [Expressjs](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Tutorialspoint](https://www.tutorialspoint.com)
