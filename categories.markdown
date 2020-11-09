---
layout: page
title: Categories
permalink: /categories/
---

{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reversed %}
<div>
<em>
  <u><strong id="{{category[0] | uri_escape | downcase }}">{{category[0] | capitalize}}:</strong></u>
</em>
<br>
  {% for post in sorted_posts %}
 	<small class="pad-left">{{ post.date | date: "%d/%m/%y"}}</small> <a href="{{ site.url }}{{ site.baseurl }}{{  post.url }}">{{ post.title }}</a><br>
  {% endfor %}
{% endfor %}
</div>
