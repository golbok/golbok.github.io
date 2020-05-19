---
layout: post
title: "Catatan GnuPG"
date: 2020-05-12 11:22:15 +0000
categories: Technology
comments: false
---

**Install Gnuppg:**

``` bash
apt-get install gnupg
```
**List Keys:**

Melihat key yang ada:	

```bash
gpg --list-secret-keys
gpg --list-keys
```

**Generate Keys:**

Membuat pasangan kunci, menggunakan:
``` bash
gpg --full-generate-key
```
OR
```bash
gpg --gen-key
```

**Export/Import Keys:**

Export key yang sudah dibuat:

```bash
gpg --export -a [nama-user] > user_public.key
gpg --import user_public.key
gpg --export-secret-keys [nama-user] > user-private-key.key
gpg --import user-private-key.key
```

**Encrypt & Decrypt:**

<i class="fa fa-info-circle"></i> `<description>` bisa berupa nama/alamat email atau bagian dari id kunci.

1. *Encrypt:*
```bash
gpg -e -r "[nama-user]" users.csv
gpg --always-trust -e -r "[nama-user]" users.csv
```
OR
```bash
gpg -e -a -r <description> file
```
*Option:*
```bash
-e = --encrypt
-a = --armor (keluaran ascii bukan biner)
-r = --recipient USER-ID
```
see: `gpg --help`
<span class="text-warning text-bold"><i class="fa fa-info-circle"></i> Deskripsi Key-ID anda dengan menambahkan 0x didepan id, jika menggunakan uid</span>
e.g:
```bash
gpg -e -a -r 0xF83NSD file
```

2. *Decrypt:*
```bash
gpg -d users.csv.gpg
gpg --batch --passphrase demo users.csv.gpg
```
OR
```bash
gpg -d -o newdecryptfile nama-file-yang-diencrypt.asc/gpg (formatnya asc atau gpg)
```

**Delete Keys:**

hapus kunci yang tidak digunakan lagi (misal: expired)

hapus *secret key* terlebih dahulu,
```bash
gpg --delete-secret-key <description>
```
kemudian hapus *public key*
```bash
gpg --delete-key <description>
```

**Sign a Public Key:**

Anda harus mencetak Key-ID dan sidik jari anda dengan:
```bash 
gpg -v --fingerprint <description> 
```
dan tandatangani tulisan ini tanda tangan anda. Ini bisa berguna kapanpun anda harus membuktikan kepada seseorang bahwa ini adalah: <span class="text-success">KUNCI PUBLIC ANDA.</span>

Untuk menandatangani kunci public, anda harus memiliki kunci di ring kunci anda. 

Cara memasukkan kunci ke dalam ring kunci:
```bash
gpg --edit-key <description>
...
...
gpg> sign
```
