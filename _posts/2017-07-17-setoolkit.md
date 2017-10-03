---
layout: post
title: "Setoolkit"
date:   2017-07-17 10:00:08 0500
categories: tools
tags: [linux, pentest]
comments: true
---

![setoolkit linux](/assets/img/sk/sk.jpg)<center><small class="caption">setoolkit</small></center>

## Social Engineering Toolkit
akses pertama untuk dapat menggunakan <em>setoolkit</em> dilinux cuku lakukan instalasi git yang nantinya bisa di clone dari github.


Code dibuat oleh <strong> David Kennedy (ReL1K)</strong>

Tools ini basisnya *open-sources* sebagai alat pentest (*penetration testing*)

### Platform

Windows tidak support untuk Tools ini, karna windows hanya untuk nonton *movie* dan buat dokumen *resume* kerja, hehe..

platform yang mendukung untuk tools ini adalah:

- Linux, dan
- MacOS

### Instalasi

pemasangan tools ini sangat mudah, dan proses downloadnya tidak dalam bentuk file.exe

cukup dengan:

    git clone https://github.com/trustedsec/social-engineer-toolkit/ set/

pada **Terminal** bukan (*command-prompt*), nanti akan dibundle kedalam folder `set`, yang penting *git* sudah terinstall

    Cloning into 'set'...
    ......

setelah dicloning, lalu masuk kedalam direktori `set/`

    cd set


kecepatan *cloning* tergantung jaringan, karna objek file lumayan banyak sekitar `(109345)` objek

dan install dengan *command* python:

    python setup.py install

Detail untuk dependesi file:

#### Resolve dependencies
**Ubuntu/Debian System**

    $ apt-get --force-yes -y install git apache2 python-requests libapache2-mod-php \
  python-pymssql build-essential python-pexpect python-pefile python-crypto python-openssl

**Arch System**

    $ pacman -S --noconfirm --needed git python2 python2-beautifulsoup3 python2-pexpect python2-crypto
    $ wget https://github.com/erocarrera/pefile/archive/master.zip && unzip master.zip
    $ chmod a+x pefile-master/setup.py && rm -rf pefile-master*

**Mac OS X dependent**

menggunakan `pip`:

    $ pip install pexpect pycrypto pyopenssl pefile


## Setoolkit


memulai:

    $ sudo setoolkit


``` bash
Select from the menu:

   1) Social-Engineering Attacks
   2) Penetration Testing (Fast-Track)
   3) Third Party Modules
   4) Update the Social-Engineer Toolkit
   5) Update SET configuration
   6) Help, Credits, and About

  99) Exit the Social-Engineer Toolkit

set>
```
diatas alah *command* opsi yang bisa digunakan


## Kegunaan

Banyak yang dapat dilakukan dengan tools ini salah satunya cloning tampilan login, dan mendapatkan password target dengan fake login dengan tampilan login mirip dengan aslinya dengan menggunakan **Website Attack Vectors**


<strong>
	Ref:
</strong>
[trusetdsec](https://github.com/trustedsec/social-engineer-toolkit)