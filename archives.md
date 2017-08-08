---
layout: default
title: Archives
---
{% assign thedate = '' %}
<ol>

<div class="paginate-page">
	{% for post in site.posts %}


    {% assign thedate = post.date | date: "%m-%d-%Y" %}

<li><strong class="headline"><a href="{{ post.url }}">{{ post.title }}</a> - <span class="date-archives-post">Posted on {{ post.date | date: "%A, %B %e, %Y" }}</span></strong></li>

{% endfor %}
<br>
<center>
	<a class="btn btn-default btn-sm" href="#top"><i class="fa fa-arrow-up"></i> Back to top</a>
</center><br>