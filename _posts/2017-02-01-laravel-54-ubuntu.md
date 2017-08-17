---
layout: post
title:  "Testing Laravel 5.4 di Ubuntu"
date:   2017-02-01 04:28:06 -0500
categories: post php
tags: [laravel, php]
comments: false
---

![laravel-wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LaravelLogo.png/1200px-LaravelLogo.png)<center><small class="caption">wikimedia</small></center>

## Laravel 5.4

Dulu pernah belajar Laravel pada versi rilisan ke 4.^, kemudia sekarang nyoba lagi dengan rilisan terbaru 5.^ dan buat bingung sendiri, [strukturnya](https://laravel.com/docs/5.4/structure) pun ada yang sedikit berbeda dari sebelumnya urusan dengan framework memang perlu berfikir ekstra keras, tapi jika Applikasi benar-benar jadi dibuat menggunakan framework satu ini, ada kepuasan yang tidak ~.

Seperti kebanyakan versi sebelum-sebelumnya, yang pasti perbaikan-perbaikan pasti terus diperbaharui pada Laravel 5.4 ini, yang sangat dan sangaat jadi kendala adalah tidak cuma pemasangannya di linux konfigurasi seperti migrasi ke dalam databasenya pun banyak sekali trublesuting belum lagi *user privilege*nya, dan permasalahan ini mungkin relatif ya, mungkin.

### Pemasangan

Pemasangan yang diuji disini tidak menggunakan homestead/vm lainnya, biasa saja seperti memasang aplikasi php lainnya,  pertama menggunakan lampp, ada kendala saat koneksi dengan mysql drivernya ndak ada (kira-kira begitu maksudnya), dan pesan ini terus muncul:

Pada saat pemasangan lebih baik menggunakan `composer create-project --prefer-dist laravel/laravel project` Sebelumnya PATH pada composer diexport didalam bash profile Ubuntu.

### Database Migration

Pada kasus Sebelumnya selalu `could not find driver` di *Exception*nya, maksudnya apa? zaman gini kok masih susah nyari *driver*

ketika melakukan *migrate* kedalam database

![errrno](/assets/img/lar/lar.png) <center class="caption"><small> gambar ini sudah bisa connect, sebelumnya bukan begini lupa ss</small></center> 

**Solusinya** tidak jadi menggunakan lampp, install php-mysql mysql core:

kemudian bisa dimulai dengan:

    sudo /etc/init.d/mysql start

kitas asumsikan file `.env` didalam project laravel sudah disetting,

``` bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=nama_user_database
DB_PASSWORD=rahasia
```
buka mysql di console, `mysql -u root -p -h host`

buatkan database yang sesuai dengan DB_DATABASE didalam file .env tadi:

    mysql> create database name_database;
    mysql> use name_database;

dilakukan migrasi lagi, `php artisan migrate` dan *success* baru bisa dilakukan.