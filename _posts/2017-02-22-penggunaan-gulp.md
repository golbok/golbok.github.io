---
layout: post
title:  "Penggunaan Gulp Untuk Front-End Developer"
date:   2017-02-22 04:28:06 -0500
categories: post tools
tags: [gulp, front-end-developer]
comments: true
---

![Gulp Awesome](/assets/img/gulp/gulpjs-cover.png)<center><small class="caption">gulpjs.com</small></center>

### Gulp Tool

<div class="info">Untuk dapat menggunakan Tool <a href="http://gulpjs.com/" target="_blank">Gulp</a> baiknya mengetahui sedikit tentang sintaks dan alur kerja javascript. instalasinya menggunakan <code>npm</code> dari node js</div>

Berikut *content list* pada halaman ini:

1. [Gulp adalah?](#head1)
2. [Kenapa menggunakan gulp?](#head2)
3. [Apa saja yang dapat dilakukan Gulp](#head3)
4. [Instal Gulp](#head4)
5. [Membuat Project Gulp](#head5)
6. [Membuat Stuktur folder](#head6)
7. [Membuat Gulp Task](#head7)

#### 1. <a name="head1"></a> Gulp adalah

[Gulp] merupakan sebuah tools untuk *front-end developer* yang dapat membantu membuat beberapa *task*/tugas saat membangun web/*web development*. Biasanya [Gulp] digunakan ketika membuat kustomisasi desain website.


[Gulp] digunkan untuk melakukan *front end tasks*, seperti:

- *spinning up* server web
- Reload otomatis pada browser ketika file/skrip disimpan
- Menggunakan *preprocesors* seperti Sass atau LESS
- Optimasiasi aset (CSS, Javascript dan gambar)



#### 2. <a name="head2"></a> Kenapa menggunakan Gulp?

[Gulp] lebih tepatnya disebut sebagai *"Build tools"* **kenapa?** karena fungsi gulp pada saat membangun sebuah website adalah menjalankan *task* atau beberapa *task* dalam proses pembuatan website.

Karena *tools* pengembangan yang populer dalam hal *front-end dev* sekarang adalah [Gulp] dan [Grunt], dan beberapa yang lainnya seperti, [Broccoli] yang fokusnya pada kompilasi aset.

Perbedaan utama *tools* yang disebutkan tadi terhadap Gulp adalah, konfigurasi pada *workflownya*. Konfigurasi gulp cenderung lebih singkat, cepat dan lebih simpel tentunya.

#### 3. <a name="head3"></a> Apa saja yang dapat dilakukan

seperti yang disebutkan task pada gulp diatas, yang dilakukan nantinya adalah

- Membuat sebuah web server
- Meng compile File Sass ke CSS
- Reload pada browser secara otomatis ketika file disimpan
- Optimasi semua aset seperti (CSS, Javascript/js, fonts dan gambar) untk dilakukan tahapan *production*
- Bagaimana memadukan semua secara bersama *task* yang berbeda kedalam beberapa baris perintah yang simpel

#### 4. <a name="head4"></a> Instal Gulp

<div class="info">Syarat instalasasi <a href="http://gulpjs.com/" target="_blank">Gulp</a> dibutuhkan Node.js jika belum silahkan dilakukan instalasi &rarr; <a href="https://nodejs.org/" target="_blank">Node.js</a></div>

kita asumsikan node js sudah terinstall dan gunakan *command-line berikut*:

``` bash
$ sudo npm install gulp -g
```

- *npm (node package manager)*
- *-g (instal secara global)*

<div class="info">
  jika terjadi masalah saat perintah diatas dieksekusi lakukan penyesuaian &rarr; <a href="https://www.npmjs.com" target="_blank">Npm Permission</a>
</div>

#### 5. <a name="head5"></a> Membuat Project Gulp

sebagai contoh kita buat project dengan nama **project-gulp**

    $ mkdir project-gulp
    $ cd project-gulp

Posisi sekarang didalam folder **/project-gulp**
lakukan `npm init` gunanya nanti adalah untuk membuat sebuah file `package.json` yang menampung tentang semua informasi projec yang akan dibuat, seperti berikut:

    npm init

{% raw %}
~~~bash
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (project-gulp)
version: (1.0.0)
description: first gulp projcet
entry point: (index.js)
test command:
git repository:
keywords:
author: imam
license: (ISC)
About to write to /home/bigbug/project-gulp/package.json:

{
  "name": "project-gulp",
  "version": "1.0.0",
  "description": "first gulp projcet",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "imam",
  "license": "ISC"
}


Is this ok? (yes)
~~~
{% endraw %}

Nah, ketika `package.json` sudah dibuat, baru kemudian instalasi [Gulp] kedalam project **project-gulp** dengan perintah:

    $ npm install gulp --save-dev

jika terjadi seperti berikut:

    npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue

ada paket yang menggunakan versi lama cara update dengan yang terbaru:

    $ npm install minimatch@3.0.2

setelah project berhasil diinstall dalam folder **project-gulp** akan terlihat seperti berikut:

![Project gulp](/assets/img/gulp/node.png)

coba lihat apakah folder **gulp** ada didalam folder **node_modules**.

#### 6. <a name="head6"></a> Membuat Struktur Folder

Struktur *generic webapp*:

``` bash
|- app/
      |- css/
      |- fonts/
      |- images/
      |- index.html
      |- js/
      |- scss/
  |- dist/
  |- gulpfile.js
  |- node_modules/
  |- package.json
```

#### 7. <a name="head7"></a> Membuat Gulp Task

Untuk melakukan pembuatan task silahkan buka file `gulpfile.js`

Hal yang pertama dilakukan menggunakan Gulp adalah membuat `require` didalam gulpfile

``` javascript

var gulp = require('gulp');

```

*statement* `require` untuk memerintahkan Node untuk mencari paket `gulp` didalam folder `node_modules`.

kemudian kita bisa memulai membuat *gulp task* menggunakan variabel `gulp`:
``` javascript
var gulp = require('gulp');

gulp.task('nama-task', function(){
	//task diletak kan disini
});
```
Pada `'nama-task'` diatas kita bisa memanggil gulp di *command line* dengan cara `gulp nama-task`, cara mengetahui perintah dapat dijalankan dengan cara berikut:

``` javascript
var gulp = require('gulp');

gulp.task('hello', function(){
	console.log('Hallo imam');
});
```
    > gulp hello

dan akan ditampilkan pada console seperti berikut:
![Command gulp](/assets/img/gulp/cmd-gulp.png)

Berikut merupakan tampak `gulp task` yang sebenarnya:

``` javascript
gulp.task('nama-task', function(){
	return gulp.src('source-files')
	.pipe(aGulpPlugin())
	.pipe(gulp.dest('folder-destinasi'))
});
```
ada dua gulp method pada contoh diatas, `gulp.src` dan `gulp.dest`

`gulp.src` menentukan file yang mana yang akan dijadikan *task*
`gulp.dest` dimana nanti *output task* ketika file disimpan dan gulp dieksekusi oleh *command line*

Masih banyak lagi `package` yang dapat dimanfaatkan menggunakan [Gulp] seperti *text css preprocessing*, *globbing*, dan masih banyak lagi.

### Contoh menggunakan gulp

![gulp](/assets/img/gulp/gulp.png)

*ref: [Npm], [Gulp], [Node.js], [Css trick]*


[Css trick]:https://css-tricks.com/
[Npm]:https://www.npmjs.com/
[Npm Permission]:https://www.npmjs.com/
[Gulp]:http://gulpjs.com/
[Grunt]:http://gruntjs.com/
[Broccoli]:https://github.com/broccolijs/broccoli
[Node.js]:https://nodejs.org/
