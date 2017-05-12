$(document).ready(function(){
	//Changes nav color on/off hover
	$(".navbar .nav li a").hover(function(){
        $(this).css("color", "#52B3D9");
        $(this).css("transition", "1s");
    },
    function(){
        $(this).css("color", "#D2D7D3");
        $(this).css("transition", "1s");
    });

	//Changes logo color on/off hover
    $(".navbar-brand").hover(function(){
        $(".navbar-brand .date").css("color", "#52B3D9");
        $(".navbar-brand .professor").css("color", "#87D37C");
        $(".navbar-brand .date").css("transition", "1s");
        $(".navbar-brand .professor").css("transition", "1s");
    },
    function(){
        $(".navbar-brand .date").css("color", "#87D37C");
        $(".navbar-brand .professor").css("color", "#52B3D9");
        $(".navbar-brand .date").css("transition", "1s");
        $(".navbar-brand .professor").css("transition", "1s");
    });

    //Changes border size and opacity on professor image hover
	$(document).on({
	    mouseenter: function(){
	        $(this).css("border", "10px solid black");
	        $(this).css("filter", "brightness(50%)");
	        $(this).css("transition", "1s");
	    },
	    mouseleave: function(){
	        $(this).css("border", "3px solid black");
	        $(this).css("filter", "brightness(100%)");
	        $(this).css("transition", "1s");
	    }
	}, '.professorImage');
});