---
layout: default
title: Archives
---
{% assign thedate = '' %}

<div id="archives">
{% for category in site.categories %}
{% assign thedate = post.date | date: "%m-%d-%Y" %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>
    
    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <h4><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a> &mdash; <small>
      	<span class="date-archives-post">Posted on {{ post.date | date: "%A, %B %e, %Y" }}</span>
      </small></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
<br>