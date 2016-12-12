jQuery(document).ready(function(){
	jQuery(".hamburger").click(function(){
		jQuery(".menu").slideToggle(400, function(){
			jQuery(this).toggleClass("nav_expanded").css('display', '');
		});
	});
});