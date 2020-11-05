---
layout: page
title: Categories
permalink: /categories/
---

{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reversed %}
<div>
<em><strong id="{{category[0] | uri_escape | downcase }}">{{category[0] | capitalize}}:</strong></em>
<br>
  {% for post in sorted_posts %}
 	&emsp;<small>{{ post.date | date: "%Y%m%d"}}</small>/<a href="{{ site.url }}{{ site.baseurl }}{{  post.url }}">{{ post.title }}</a><br>
  {% endfor %}
{% endfor %}
</div>
