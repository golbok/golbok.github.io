---
layout: post
title: "Catatan GnuPG"
date: 2020-05-12 11:22:15 +0000
categories: Technology
comments: false
---
### GnuPG

<i class="fa fa-info-circle"></i> `<description>` bisa berupa nama/alamat email atau bagian dari id kunci.

**Install Gnuppg:**

```bash
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
```bash
gpg --full-generate-key
```
OR
```bash
gpg --gen-key
```

**Export/Import Keys:**

Export/Import key yang sudah dibuat ke dalam mesin:

1. Pub. Keys
```bash
gpg --export -a <description> > user_public.key
gpg --import user_public.key
```
2. Sec. Keys
```bash
gpg --export-secret-keys <description> > user-private-key.key
gpg --import user-private-key.key
```

**Encrypt & Decrypt:**

1. *Encrypt:*

<i class="fa fa-info-circle"></i> Ingat, -e != --export

```bash
gpg -e -r <description> users.csv
gpg --always-trust -e -r <description> users.csv
```
OR
```bash
gpg -e -a -r <description> file
```
*Option:*
```bash
-s = --sign
-e = --encrypt
-a = --armor (keluaran ascii bukan biner)
-r = --recipient USER-ID
```
see: `gpg --help`<br>
<span class="text-warning text-bold"><i class="fa fa-info-circle"></i> Deskripsi Key-ID anda dengan menambahkan 0x didepan id, jika menggunakan uid</span><br>
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
To sign a document with PGP, run this in the command-line:

```bash
gpg --output document.sig --sign document.pdf
```

To verify a document that has been signed with PGP, run this in the command line:

```bash
gpg --output document.pdf --decrypt document.sig
```
**Submit Public Key anda ke server:**

[phar.io](https://phar.io/howto/uploading-public-keys.html)

```bash
gpg --keyid-format LONG --list-keys john@example.com
pub   rsa4096/ABCDEF0123456789 2018-01-01 [SCEA] [expires: 2021-01-01]
      ABCDEF0123456789ABCDEF0123456789
uid              [ ultimate ] John Doe
```
format diatas menampilkan key-ID 16-byte setelah tipe-kunci dan jumlah-kunci: 

```bash
pub rsa4096/ABCDEF0123456789 2018-01-01 [SCEA] [expires: 2021-01-01]
```

berarti, key-ID: `ABCDEF0123456789`

gunakan key-ID tsb untuk mengirim pub-key ke **keyserver**, biasanya seperti keyserver MIT:

```bash
gpg --keyserver pgp.mit.edu --send-keys ABCDEF0123456789
```
#### Examples

[gnupg.org](https://www.gnupg.org/documentation/manuals/gnupg/GPG-Examples.html)

sign and encrypt for user Bob: `gpg -se -r Bob file`

make a cleartext signature: `gpg –clear-sign file`

make a detached signature: `gpg -sb file`

make a detached signature with the key 0x12345678: `gpg -u 0x12345678 -sb file`

show keys: `gpg –list-keys user_ID`

show fingerprint: `gpg –fingerprint user_ID`

Verify the signature of the file but do not output the data unless requested: `gpg –verify pgpfile` 

The second form is used for detached signatures, 
where `sigfile` is the detached signature (either ASCII armored or binary) and datafile are the signed data; if this is not given, 
the name of the file holding the signed data is constructed by cutting off the extension (".asc" or ".sig") 
of sigfile or by asking the user for the filename. If the option `--output` is also used the signed data is written to 
the file specified by that option; use - to write the signed data to stdout: `gpg –verify sigfile [datafile]`
