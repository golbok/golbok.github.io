---
layout: page
title: Categories
permalink: /categories/
---
{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reversed %}
<h2 id="{{category[0] | uri_escape | downcase }}">{{category[0] | capitalize}}</h2>
  {% for post in sorted_posts %}
 	<small>{{ post.date | date: "%Y%m%d"}}</small>&mdash;<a href="{{ site.url }}{{ site.baseurl }}{{  post.url }}"> {{ post.title }}</a><br>
  {% endfor %}
{% endfor %}
