---
layout: post
title: "Damn Vulnerable Web Application (DVWA)"
date: 2019-01-22 17:22:15 +0000
categories: Technology
comments: false
---
![dvwa logo](/assets/img/20190122/logo.png)

DVWA sebuah aplikasi web yang **sengaja dibuat rentan** untuk digunakan sebagai alat uji coba *pentesting*, seperti: *Brute Force, Command Injection, SQL Injection, Cross-site scripting (XSS) dll*.

DVWA dibuat menggunakan basis PHP/MYSQL.

- Download <a href="https://github.com/ethicalhack3r/DVWA/archive/master.zip" target="_blank">Source control dvwa</a>

atau kloning dari git:
{% highlight bash %}
git clone https://github.com/ethicalhack3r/DVWA
{% endhighlight %}

- ekstrak dan pindahkan ke server lokal anda (`/opt/lampp/htdocs` atau `/var/www/html`)

- setelah diekstrak, atur izin akses aplikasi

{% highlight bash %}

$ sudo chmod +xwr -R /var/www/html/dvwa

{% endhighlight %}

- buat database `dvwa` atau terserah nama database yang diinginkan

- sesuaikan hosts, username, dan pass database dengan file `../dvwa/config/config.inc.php.dist`, buat backup, dan ganti nama dengan menghilangkan .dist menjadi `config.inc.php`

sesuaikan isi dengan database yang telah dibuat:

{% highlight php %}
........
$_DVWA = array();
$_DVWA[ 'db_server' ]   = '127.0.0.1';
$_DVWA[ 'db_database' ] = 'dvwa';
$_DVWA[ 'db_user' ]     = 'root';
$_DVWA[ 'db_password' ] = 'passw0rd';
........
{% endhighlight %}
Ubah `php.ini` menjadi:
{% highlight php %}
allow_url_fopen = On
allow_url_include = On
{% endhighlight %}

- Buka aplikasi di browser:
`127.0.0.1/dvwa/setup.php`

**Create / Reset Database** halamn paling bawah, (jika terjadi kesalahan cek lagi kesesuain koneksi database di file `config.inc.php`)

jika berhasil akan diarahkan ke halaman login:
{% highlight ruby %}
username	: admin
Password 	: password
{% endhighlight %}
![dvwa logo](/assets/img/20190122/1.png)
![dvwa logo](/assets/img/20190122/2.png)


&mdash; [dvwa.co.uk](http://dvwa.co.uk/)