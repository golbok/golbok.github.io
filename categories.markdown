---
layout: page
title: Categories
permalink: /categories/
---

{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <h2 class="category-head">{{ category_name }}</h2>
    <!--<a name="{{ category_name | slugize }}"></a>-->
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <em><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></em>
    </article>
    {% endfor %}
  </div>
{% endfor %}
