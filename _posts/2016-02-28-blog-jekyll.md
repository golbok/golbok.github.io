---
layout: post
title: "Mudahnya Membuat Blog Jekyll di Linux"
date:   2016-02-28 19:28:06 -0500
categories: post jekyll
comments: true
tags: [jekyll, blog]
---

## Jekyll Static Site Generator

<img src="https://jekyllrb.com/img/octojekyll.png" alt="jekyll awesome" class="img-small" />

Dari beberapa platform untuk membangun website/blog seperti menggunakan wordpress/blogspot/tumblr dkk, namun cuma di jekyll yang lumayan serius.

Hal ini karena didukung dengan kemudahannya dan super *customable*

Jekyll merupakan tipe blog-aware *Static site Generator*[^1] yang sangat simple.

Kita membuat direktori dengan struktur yang sudah ditentukan dan kita menggunakan beberapa file seperti format *markdown* (.md)[^2] dan liquid[^3].

Jekyll bisa kita dibangun (host) di [GitHub Pages](https://pages.github.com/)

## Install Jekyll Menggunakan GEM Ruby

Untuk membuat blog jekyll pertama [Ruby] harus sudah terinstall terlebih dahulu karna jekyll nantinya diinstall menggunakan paket dari gem.

Debian/Ubuntu

    $ sudo apt-get install ruby-full

CentOS, Fedora, RHEL

    $ sudo yum install ruby

Portage (Gentoo)

    $ sudo emerge dev-lang/ruby

 Pacman (Arch Linux)

     $ sudo pacman -S ruby

OS X Menggunakan **Homebrew**

    $ brew install ruby

Untuk management paket versi pada [Ruby] silahkan menginstall [.rbenv](https://www.ruby-lang.org/en/documentation/installation/#rbenv) 

Update Ruby Gem:

    $ sudo gem update --system

Untuk lebih lengkapnya [Gems](https://rubygems.org/pages/download)

Gem sudah siap kemudian instalasi Jekyll menggunakan gem

{% highlight bash%}
# Install Jekyll dan Bundle Gems sekaligus menggunakan RubyGems
$ gem install jekyll bundler

# Check jekyll
$ jekyll --version

# Buat blog Jekyll
$ jekyll new blog-saya

Running bundle install in /home/user/blog-saya... 
Bundler: The dependency tzinfo-data (>= 0) will be unused by any of the platforms Bundler is installing for. Bundler is installing for ruby but the dependency is only for x86-mingw32, x86-mswin32, x64-mingw32, java. To add those platforms to the bundle, run `bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java`.
Bundler: Fetching gem metadata from https://rubygems.org/...........
Bundler: Fetching version metadata from https://rubygems.org/..
Bundler: Fetching dependency metadata from https://rubygems.org/.
Bundler: Resolving dependencies...
Bundler: Using public_suffix 2.0.5
Bundler: Using colorator 1.1.0
Bundler: Using sass 3.4.24
Bundler: Using rb-fsevent 0.9.8
Bundler: Using ffi 1.9.18
Bundler: Using kramdown 1.13.2
Bundler: Using liquid 3.0.6
Bundler: Using mercenary 0.3.6
.........

# kemudian masuk ke direktori blog-saya
$ cd blog-saya

{% endhighlight %}


Stuktur direktori default didalam direktori **/blog-saya** 

``` bash
.
├── about.md
├── _config.yml
├── Gemfile
├── Gemfile.lock
├── index.md
└── _posts
    └── 2017-06-13-welcome-to-jekyll.markdown

1 directory, 6 files

```

Untuk melihat hasilnya eksekusi *bundle*:

    $ bundle exec jekyll serve -w

nanti akan diarahkan ke port: 4000 seperti berikut:

    ........
    Server address: http://127.0.0.1:4000/
	Server running... press ctrl-c to stop.

Pada browser buka server address: 127.0.0.1:4000 atau localhost:4000

![Jekyll awesome](/assets/img/jk/loc.png)

Pada tahap ini boleh dikatakan blog sudah jadi, dan silahkan atur layout sesuai selera yang bisa kita kustom 'seterserah' mungkin banyak tema tersedia gratis [Jekyllthemes.org](http://jekyllthemes.org/)

Dokumentasi, untuk membuat `_posts`, `_include`, `_layouts`, `_plugins`, `assets` dan lainnya silahkan lihat dokumentasi lengkap di [Jekyllrb](https://jekyllrb.com/)

___

[^1]: An *Static Site Generator* (SSG) is a compromise between using a hand-coded static site and a full CMS, while retaining the benefits of both. In essence, you generate a static HTML-only website using CMS-like concepts such as templates. The content can be extracted from a database but, more typically, Markdown files are used.(sitepoint.com)

[^2]: Markdown Syntax Documentation: [Daring Fireball](https://daringfireball.net/projects/markdown/syntax)

[^3]: Liquid markup language. Safe, customer facing template language for flexible web apps. [liquidmarkup](http://liquidmarkup.org/)

[Ruby]:https://www.ruby-lang.org/en/downloads/