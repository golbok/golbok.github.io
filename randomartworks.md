---
layout: portfolio
title: randomatworks
---
<div class="container">
	<div class="col-md-12">
		
			<div class="row">
				{% for gall in site.galls %}
  				<div class="col-sm-6 col-md-4">
    				<div class="thumbnail">
      				<img src="{{ gall.image_path }}" alt="{{ gall.title }}">
        			<h3 class="text-center">{{ gall.content }}</h3>
        			<p></p>
        			<p><a href="#" class="btn btn-primary btn-block" role="button"><i class="fa fa-eye"></i></a> </p>
      			
    				</div>
  				</div>
		{% endfor %}
	</div>
</div>
</div>