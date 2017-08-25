---
layout: post
title: "Struktur Data Schema.org dan Fungsinya"
date:   2016-02-02 21:28:06 -0500
categories: blog
comments: true
tags: [markup, schema.org]
---
![schema.org google](/assets/img/schema/schema.org.png)<center class="caption"><small>schema.org</small></center>

## Mengenal Schema.org

Biasanya untuk para *webmaster* sangat familiar dan sudah hafal diluar kepala mengenai fungsi *tag-tag* yang ada dalam HTML. Tags HTML yang gunanya untuk menampilkan informasi dari parameter tags yang diberikan. misalnya tags `<p> Hello world!</p>`

Kosakata dari Schema.org bisa kita gunakan kedalam format yang lain seperti RDFa[^1], Microdata[^2] dan JSON-LD[^3]. Menurut situs resmi schema.org lebih dari 10 juta situs sudah menggunakan Schema.org untuk memberikan *markup* pada halaman web dan email mereka.

Banyak aplikasi yang telah menggunakan kosakata schema.org untuk memeperkaya mikrodata pada aplikasi mereka sperti *brand* ternama yang kita tau, **Google**, **Microsoft**, **Pinterest** dll.

## Struktur Data Schema.org

Schema.org atau lebih sering disebut Schema merupakan tag kosakata yang lebih spesifik yang ditambahkan didalam tag HTML yang disebut dengan istilah *microdata* yang gunanya nanti adalah bagaimana aplikasi kita ditampilkan dihalaman mesin pencari (SERP)[^4].

sederhananya, kita membuat mikrodata menggunakan schema.org untuk memberi tahu kepada mesin pencari, kemudian mesin mencari melalui microdata schema.org akan memahami kontent yang dimaksud dan menampilkan dihalaman mereka dengan suguhan informasi dari situs yang kita buat yang jelas dan terstruktur.

## Fungsinya?
Kadang kalau pengguna dapat dengan mudah mengerti apa yang tujuan dari website tertentu, tapi tidak dengan mesin pencari, mesin pencari memiliki keterbatasan dalam mengerti tentang apa yang maksud khusus/didiskusikan oleh website tertentu.

Dengan kita menambahkan tags dari schema.org *tags* yang dimaksud nantinya akan memberitahukan kepada mesin pencari kira-kira seperti ini: "hei Google informasi dari website ini menjelaskan Film apa, tempat apa, buku apa dengan lebih spesifik".

### Itemscope dan Itemtype
kita buat sebuah perumpamaan, bayangkan anda memiliki sebuah halaman website yang menampilkan film "Avatar" termasuk juga baris link untuk *trailernya* informasi *genre* siapa penulisnya, sutradaranya dlsb. kira-kira kodenya seperti berikut:

{% highlight html %}
<div itemscope itemtype="https://schema.org/Book">
  <span itemprop="name"> Inbound Marketing and SEO: Insights from the Moz Blog</span>
  <span itemprop="author">Rand Fishkin</span>
</div>
{% endhighlight%}

Kemudian bagaimana mengidentifikasi menggunaka tags schema? guakan tags `itemscope` dan tag `itemtype` sbb:

{% highlight html %}
<div itemscope>
  <h1>Avatar</h1>
  <span>Director: James Cameron (born August 16, 1954) </span>
  <span>Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
</div>
{% endhighlight %}

tag `itemscope` diletakan di tag HTML `div`, maksudnya semua elemen didalam blok `div itemscope` adalah bagian dari `itemscope`, tetapi belum sepenuhnya membantu untuk melakukan spesifikasi dari setiap data. Mari kita tambahkan `itemtype`  setelah `itemscope` lalu disertai link kosakata dari schema.org:

{% highlight html %}
<div itemscope itemtype="http://schema.org/Movie">
  <h1>Avatar</h1>
  <span>Director: James Cameron (born August 16, 1954)</span>
  <span>Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
</div>
{% endhighlight %}


### Itemprop

Item Property, informasi tambahan apa lagi yang bisa kita buat untuk memberitahu mesin pencari tentang film tersebut? seperti judulnya filmnya, siapa sutradaranya genre apa, lalu kita buat properti sesuai schema.org didalam tag HTML seperti sebelumnya.

{% highlight html %}
div itemscope itemtype ="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>Director: <span itemprop="director">James Cameron</span> (born August 16, 1954)</span>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">Trailer</a>
</div>
{% endhighlight %}

Untuk lebih lengkapnya bagaiman melakukan *Embedding* dan pengguanaan *Vocabulary* dari schema.org kita bisa melakukan pencarian kata yang spesifik pada website [Schema.org]


### Generate JSON-LD Schema:

&rarr;[jamesdflynn's site](https://www.jamesdflynn.com/json-ld-schema-generator/)

Ref:
- [Schema.org]
- [Moz.com](https://moz.com/learn/seo/schema-structured-data)

[Schema.org]:https://schema.org/docs/gs.html
___

[^1]:(RDFa) W3C Recommendation that adds a set of attribute-level extensions to HTML, XHTML and various XML-based document types for embedding rich metadata within Web documents

[^2]: Microdata is a WHATWG HTML specification used to nest metadata within existing content on web pages. Search engines, web crawlers, and browsers can extract and process Microdata from a web page and use it to provide a richer browsing experience for users.

[^3]:JSON-LD is a lightweight Linked Data format

[^4]:search-engine results page: a web page that is generated by a search engine to display the results of a query or search.
