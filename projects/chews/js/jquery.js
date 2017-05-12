$(document).ready(function(){
	//Hides navbar scrolling down, shows navbar scrolling up
	$lastScrollTop = 0;

	$(window).scroll(function(event){
		$scrollTop = $(this).scrollTop();

		if($scrollTop > $lastScrollTop){
			$('nav').slideUp(500);
		} 
		else{
			$('nav').slideDown(500);
		}
		$lastScrollTop = $scrollTop;
	});

    //White underline hover effect for navbar
	$(".desktop-nav li").hover(function(){
        $(this).css("box-shadow", "inset 0 -8px 0 0 white");
        $(this).css("transition", "1s");
    },
    function(){
        $(this).css("box-shadow", "none");
        $(this).css("transition", "1s");
    });

    //Change logo text color to black on hover
    $(".brand-logo").hover(function(){
    	$(this).css("color", "black")
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).css("color", "white")
    	$(this).css("transition", "1s");    
    });
});