---
layout: post
title: "7 Command-Line Dasar Untuk Mendapatkan Informasi pada Sistem Linux"
date:   2017-05-22 04:28:06 -0500
categories: linux
tags: [linux, Command-Line]
comments: true
---
![linux terminal](/assets/img/terminal/trmnl.png)

<span class="first-letter">J</span>ika pada OS Windows kita bisa mendapatkan Informasi tentang spesifikasi dari sistem yang sedang dipakai menggunakan `dxdiag` atau `This PC` &rarr; `right-click` &rarr; `System Properties`.

Di linux kita bisa menggunakan *Command line* di terminal, sebagai berikut:

### 1. Bagaimana jika ingin melihat versi dari kernel yang sedang berjalan pada sistem?

**UNAME**

UNAME merupakan perintah yang memberikan informasi sistem dengan spesifik

    $ uname
    Linux

Melihat secara keseluruhan:

    $ uname -a
    Linux mylinux 4.10.0-22-generic #24-Ubuntu SMP Mon May 22 17:43:20 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux

Melihat versi kernel yang sedang berjalan:

    $ uname -v
    #24-Ubuntu SMP Mon May 22 17:43:20 UTC 2017

Versi rilis kernel:

    $ uname -r
    4.10.0-22-generic

Untuk lebih lengkapnya gunakan:

    $ man uname

### 2. Bagaimana check IP Address pada sistem?

Bisa menggunakan **net-tools** jika paket belum terinstall lakukan instalasi dengan:

    $ sudo apt install net-tools

Menggunakan ifconfig:

    $ ifconfig

Karna sistem yang saya gunakan *offline* kira *display* nya seperti ini:
``` bash
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
    inet 127.0.0.1  netmask 255.0.0.0
    inet6 ::1  prefixlen 128  scopeid 0x10<host>
    loop  txqueuelen 1000  (Local Loopback)
    RX packets 6624  bytes 8296308 (8.2 MB)
    RX errors 0  dropped 0  overruns 0  frame 0
    TX packets 6624  bytes 8296308 (8.2 MB)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```
lihat deretan perangkat di baris `lo`, offline default IP 127.0.0.1

Menggunakan `ip addr show`

    $ ip addr show
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65 ..................
    ....................

Untuk melihat Ip Address perangkat

    $ ip addr show perangkat

Untuk melakukan konfigurasi interface pada jaringan dapat menggunakan:

    $iwconfig

### 3. Bagaiman melakukan check ruang *free disk*?

Menggunakan  **df** (*disk space usage*)

    $ df -ah
    Filesystem           Size  Used Avail Use% Mounted on
    sysfs                   0     0     0    - /sys
    proc                    0     0     0    - /proc
    udev                 887M     0  887M   0% /dev
    devpts                  0     0     0    - /dev/pts
    tmpfs                182M   11M  172M   6% /run
    /dev/sda7             32G  8.1G   22G  27% /
    ...........         .....   ...   ...   .........

lengkapnya menggunakan:

    $ man df

### 4. Bagaimana cara memanage *service* pada sistem?

Melihat *Dynamic device management* `udev`:

    $ service udev status
    ● systemd-udevd.service - udev Kernel Device Manager
   Loaded: loaded (/lib/systemd/system/systemd-udevd.service; static; vendor prese
   Active: active (running) since Th...........

Selengkapnya gunakan:

    $ man service

### 5. Bagaimana cara check *size* isi direktori?

Menggunakan **du** (*Disk Use*)

    $ ls
    blog       Downloads         Music      Pictures  Templates
    Desktop    Encrypted         imam               new        Public    Videos

Pada list diatas misal saya ingin melihat berapa *size* dari direktori **imam**

    $ du -sh imam
    25M	  imam

### 6. Bagaimana cara chek *port* yang terbuka?

Menggunakan **netstat**

    $ netstat
    Active Internet connections (w/o servers)
    Proto Recv-Q Send-Q Local Address           Foreign Address         State      
    Active UNIX domain sockets (w/o servers)
    Proto RefCnt Flags       Type       State         I-Node   Path
    unix  2      [ ]         DGRAM                    20833    /var/spool/postfix/dev/

Selengkapnya bisa menggunakan:

    $ man netstat

### 7. Bagaimana melihat Proses yang sedang dijalankan oleh CPU?

menggunakan **ps**

Untuk melihat proses dari `apt` misalnya

    $ ps aux | grep apt
    john     20839  0.0  0.0  21328  1016 pts/0    S+   12:26   0:00 grep --color=auto apt

Manual lengkap netstat:

    $ man netstat

Ref:
- [Linux guide](http://www.linuxguide.it/linux_commands_line_en.htm)
