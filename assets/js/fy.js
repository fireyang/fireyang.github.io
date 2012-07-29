	$('#article_indent a').each(function(){
		var href = $(this).attr('href');
		if (href) {
		if(href.indexOf('#') == 0 || href.indexOf('/') == 0){
		}else{
			$(this).attr('target','_blank');
			$(this).addClass('external');
		}
		}
	});