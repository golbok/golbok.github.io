---
layout: post
title:  "Related Post - Jekyll"
date:   2016-03-03 22:28:06 -0400
categories: post blog
comments: true
tags: [jekyll, blog]
---
## Jekyll related post

Dalam penulisan artikel lebih menarik jika post ditambahkan dengan link antar post yang saling berkaitan, ada dua metode membuat *related post* [variable](https://jekyllrb.com/docs/variables/) didalam jekyll menggunakan *liquid*.

1. Menggunakan *related* berdasarkan tags pada *post*
2. bisa menggunakan *post categories*

### 1. Related post menggunakan **tags**

Referensi didalam blog [Anmonteiro](https://anmonteiro.com/2015/08/jekyll-related-posts-revamped/) mengambil list *related post* berdasarkan tags:
di urutuan variabel YAML frontmatter, tambahkan tags

{% raw %}
~~~html
---
layout: post
title: "foo lost"
tags: foo lost bar too
---
~~~
{% endraw %}


{% raw %}
~~~html
{% assign RELATED_POSTS_THRESHOLD = 3 %}
<ul class="related-posts">
  {% assign related_post_count = 0 %}
  {% for post in site.related_posts %}
    {% if related_post_count == RELATED_POSTS_THRESHOLD %}
      {% break %}
    {% endif %}
    {% for tag in post.tags %}
      {% if page.tags contains tag %}
        <li>
          <h3>
            <a href="{{ site.baseurl }}{{ post.url }}">
              {{ post.title }}
              <small>{{ post.date | date_to_string }}</small>
            </a>
          </h3>
        </li>
        {% assign related_post_count = related_post_count | plus: 1 %}
        {% break %}
      {% endif %}
    {% endfor %}
  {% endfor %}
  {% assign posts_left = RELATED_POSTS_THRESHOLD | minus: related_post_count %}
  {% unless posts_left == 0 %}
    {% for post in site.related_posts %}
      {% if posts_left == 0 %}
        {% break %}
      {% endif %}

      {% assign already_related = false %}
      {% for tag in post.tags %}
        {% if page.tags contains tag %}
          {% assign already_related = true %}
          {% break %}
        {% endif %}
      {% endfor %}
      {% unless already_related %}
        {% assign posts_left = posts_left | minus: 1 %}
        <li>
          <h3>
            <a href="{{ site.baseurl }}{{ post.url }}">
              {{ post.title }}
              <small>{{ post.date | date_to_string }}</small>
            </a>
          </h3>
        </li>
      {% endunless %}
    {% endfor %}
  {% endunless %}
</ul>
~~~
{% endraw %}

### 2. Related post menggunakan category

Untuk membuat *related post* berdasarkan **categories** yang mengambil referensi dari [Alligator.io](https://alligator.io/jekyll/related-posts-in-jekyll/#fnref:1) menggunakan syntax liquid:

sesuaikan category dengan nama variable di YAML frontmatter:

{% raw %}
~~~html
---
layout: post
title: "foo lost"
categories: post foo bar
---
~~~
{% endraw %}

{% raw %}
~~~html
{% unless page.category == null %}
  {% capture pageCategory %}{{ page.category }}{% endcapture %}
  {% unless site.categories[pageCategory].size == 1 %}
    <div class="row related-posts">
      <h2 class="text-center">More {{ page.category }} Posts!</h2>
      <div class="medium-12 small-12 columns">
        {% for post in site.categories[pageCategory] limit:6 %}
          {% unless post.title == page.title %}

           <h3>
            <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">
              {{ post.title }}
            </a>
           </h3>

          {% endunless %}
        {% endfor %}
      </div>
    </div>
  {% endunless %}
{% endunless %}
~~~
{% endraw %}