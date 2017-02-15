$(document).ready(function(){
	//Hides navbar scrolling down, shows navbar scrolling up
	/*$lastScrollTop = 0;

	$(window).scroll(function(event){
		$scrollTop = $(this).scrollTop();

		if ($scrollTop > $lastScrollTop){
			$('nav').slideUp(500);
		} 
		else{
			$('nav').slideDown(500);
		}
		$lastScrollTop = $scrollTop;
	});*/

	$("#menu li a").hover(function(){
	        $(this).css("box-shadow", "inset 0 -8px 0 0 white");
	        $(this).css("transition", "1s");
	    },
	    function(){
	        $(this).css("box-shadow", "none");
	        $(this).css("transition", "1s");
	    });
	$('.carousel').carousel();

	$('.phone').click(function(){
		$('.contact2').html("phone");
		$('.contact').css("display", "block");
		$('.contactInfo').html("321-314-3325<br><br>*Text > Call*");
	});

	$('.email').click(function(){
		$('.contact2').html("email");
		$('.contact').css("display", "block");
		$('.contactInfo').html("anthonypn93@gmail.com<br><br>*Include name/subject*");
	});

	$(".side-nav li").hover(function(){
    	$(this).css("background-color", "black");
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).css("background-color", "white");
    	$(this).css("transition", "1s");
    });

    $(".side-nav li a").hover(function(){
    	$(this).css("color", "white");
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).css("color", "black");
    	$(this).css("transition", "1s");
    });

    $(".resume").hover(function(){
    	$(this).removeClass("white");
    	$(this).removeClass("black-text");
    	$(this).addClass("black");
    	$(this).addClass("white-text");
    	$(this).css("transition", ".5s");
    },
    function(){
    	$(this).removeClass("black");
    	$(this).removeClass("white-text");
    	$(this).addClass("white");
    	$(this).addClass("black-text");
    	$(this).css("transition", ".5s");
    });
});