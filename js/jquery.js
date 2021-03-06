$(document).ready(function(){
	//Plays animations
	$.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	    }
	});

	//White bar under nav links on hover
	$("#menu li a").hover(function(){
        $(this).css("box-shadow", "inset 0 -8px 0 0 white");
        $(this).css("transition", "1s");
    },
    function(){
        $(this).css("box-shadow", "none");
        $(this).css("transition", "1s");
    });

	//Animating and switching between contacts
	$('.phone').click(function(){
		$('.contact').animateCss("flip");
		$('.contact2').html("phone");
		$('.contact').css("display", "block");
		$('.contactInfo').html("321-314-3325<br><br>-Text > Call-");
	});

	$('.email').click(function(){
		$('.contact').animateCss("flip");
		$('.contact2').html("email");
		$('.contact').css("display", "block");
		$('.contactInfo').html("anthonypn93@gmail.com<br><br>-Include name/subject-");
	});

	//Mobile nav bar text background color change on hover
	$(".side-nav li").hover(function(){
    	$(this).css("background-color", "black");
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).css("background-color", "white");
    	$(this).css("transition", ".25s");
    });

	//Mobile nav bar text color change on hover
    $(".side-nav li a").hover(function(){
    	$(this).css("color", "white");
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).css("color", "black");
    	$(this).css("transition", ".25s");
    });

    //Resume button change on hover
    $(".resume").hover(function(){
    	$(this).removeClass("black");
    	$(this).removeClass("white-text");
    	$(this).addClass("white");
    	$(this).addClass("black-text");
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).removeClass("white");
    	$(this).removeClass("black-text");
    	$(this).addClass("black");
    	$(this).addClass("white-text");;
    	$(this).css("transition", "1s");
    });

    //zoom and flipInX and tada

    var counter = 0;

    $("#front").click(function(){
        if(counter != 1){
           $("#chart").animateCss("rubberBand"); 
        }
        counter = 1;
    });

    $("#back").click(function(){
        if(counter != 2){
           $("#chart2").animateCss("rubberBand"); 
        }
        counter = 2;
    });
});