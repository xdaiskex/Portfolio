$(document).ready(function(){
	//Change nav text color to orange and gives an orange bottom-border
    $(".desktop-nav").hover(function(){
        $(this).css("box-shadow", "inset 0 -8px 0 0 #FF9800");
        $(this).css("color", "orange");
        $(this).css("transition", "1s");
    },
    function(){
        $(this).css("box-shadow", "none");
        $(this).css("color", "white");
        $(this).css("transition", "1s");
    });

    //Change logo text color to white
    $(".brand-logo").hover(function(){
    	$(this).css("-webkit-text-stroke-color", "white");
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).css("-webkit-text-stroke-color", "orange");
    	$(this).css("transition", "1s");    
    });

    //Change side-nav background color to orange
    $(".side-nav li").hover(function(){
    	$(this).css("background-color", "orange");
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).css("background-color", "white");
    	$(this).css("transition", "1s");
    });

    //Change brand-logo in side-nav background color to black
    $(".brand-logo-side").hover(function(){
    	$(this).css("background-color", "black");
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).css("background-color", "white");
    	$(this).css("transition", "1s");
    });

    //Change anthony to white on hover
    $(".anthony").hover(function(){
    	$(this).css("color", "orange");
    	$(this).css("transition", "1s");
    },
    function(){
    	$(this).css("color", "white");
    	$(this).css("transition", "1s");
    });

    //Darken orange buttons and adds box-shadow
    $(".home-btn").hover(function(){
    	$(this).css("background-color", "#F57C00");
    	$(this).css("transition", ".5s");
    	$(this).css("box-shadow", "0px 1px 5px 0px");
    },
    function(){
    	$(this).css("background-color", "orange");
    	$(this).css("transition", ".5s");
    	$(this).css("box-shadow", "0 0 0 0");
    });

    //Change box-shadow on hover for player cards
    $(".card").hover(function(){
        $(this).css("box-shadow", "2px 1px 10px 0px black");
        $(this).css("transition", "1s");
    },
    function(){
        $(this).css("box-shadow", "0px 0px 2px 0px black");
        $(this).css("transition", "1s");
    });

    //Darken gallery image, round borders, AND PLAY THE ANIMATION SWEET JESUS THAT TOOK FOREVER
    $(".hinata1").hover(function(){
        $(this).css('-webkit-filter', 'brightness(50%)');
        $(this).css('border-radius', '20%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/hinata.gif");
        $(this).css("transition", "1s");
    }, 
    function(){
        $(this).css('-webkit-filter', 'brightness(100%)');
        $(this).css('border-radius', '0%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/hinata2.png");
        $(this).css("transition", "1s");
    });

    $(".kageyama1").hover(function(){
        $(this).css('-webkit-filter', 'brightness(50%)');
        $(this).css('border-radius', '20%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/kageyama.gif");
        $(this).css("transition", "1s");
    }, 
    function(){
        $(this).css('-webkit-filter', 'brightness(100%)');
        $(this).css('border-radius', '0%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/kageyama2.png");
        $(this).css("transition", "1s");
    });

    $(".tsukishima1").hover(function(){
        $(this).css('-webkit-filter', 'brightness(50%)');
        $(this).css('border-radius', '20%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/tsukishima.gif");
        $(this).css("transition", "1s");
    }, 
    function(){
        $(this).css('-webkit-filter', 'brightness(100%)');
        $(this).css('border-radius', '0%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/tsukishima2.png");
        $(this).css("transition", "1s");
    });

    $(".nishinoya1").hover(function(){
        $(this).css('-webkit-filter', 'brightness(50%)');
        $(this).css('border-radius', '20%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/nishinoya.gif");
        $(this).css("transition", "1s");
    }, 
    function(){
        $(this).css('-webkit-filter', 'brightness(100%)');
        $(this).css('border-radius', '0%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/nishinoya2.png");
        $(this).css("transition", "1s");
    });

    $(".tanaka1").hover(function(){
        $(this).css('-webkit-filter', 'brightness(50%)');
        $(this).css('border-radius', '20%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/tanaka.gif");
        $(this).css("transition", "1s");
    }, 
    function(){
        $(this).css('-webkit-filter', 'brightness(100%)');
        $(this).css('border-radius', '0%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/tanaka2.png");
        $(this).css("transition", "1s");
    });

    $(".yamaguchi1").hover(function(){
        $(this).css('-webkit-filter', 'brightness(50%)');
        $(this).css('border-radius', '20%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/yamaguchi.gif");
        $(this).css("transition", "1s");
    }, 
    function(){
        $(this).css('-webkit-filter', 'brightness(100%)');
        $(this).css('border-radius', '0%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/yamaguchi2.png");
        $(this).css("transition", "1s");
    });

    $(".asahi1").hover(function(){
        $(this).css('-webkit-filter', 'brightness(50%)');
        $(this).css('border-radius', '20%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/asahi.gif");
        $(this).css("transition", "1s");
    }, 
    function(){
        $(this).css('-webkit-filter', 'brightness(100%)');
        $(this).css('border-radius', '0%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/asahi2.png");
        $(this).css("transition", "1s");
    });

    $(".daichi1").hover(function(){
        $(this).css('-webkit-filter', 'brightness(50%)');
        $(this).css('border-radius', '20%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/daichi.gif");
        $(this).css("transition", "1s");
    }, 
    function(){
        $(this).css('-webkit-filter', 'brightness(100%)');
        $(this).css('border-radius', '0%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/daichi2.png");
        $(this).css("transition", "1s");
    });

    $(".suguwara1").hover(function(){
        $(this).css('-webkit-filter', 'brightness(50%)');
        $(this).css('border-radius', '20%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/suguwara.gif");
        $(this).css("transition", "1s");
    }, 
    function(){
        $(this).css('-webkit-filter', 'brightness(100%)');
        $(this).css('border-radius', '0%');
        $(this).css("box-shadow", "0px 0px 0px 0px black");
        $(this).attr("src", "img/suguwara2.png");
        $(this).css("transition", "1s");
    });
});