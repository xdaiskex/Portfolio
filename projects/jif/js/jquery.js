$(document).ready(function(){
	/*$(".nav li a").hover(function(){
        $(this).css("box-shadow", "inset 0px 0px 0px 7px white");
        $(this).css("transition", ".5s");
    },
    function(){
        $(this).css("box-shadow", "none");
        $(this).css("transition", ".5s");
    });*/
    
    //Background color change on hover for nav
    $(".nav li a").hover(function(){
        $(this).css("background-color", "white");
        this.style.setProperty("color", "#4183D7", "important");
        $(this).css("transition", "1");
    },
    function(){
        $(this).css("background-color", "#4183D7");
        $(this).css("color", "white");
        $(this).css("transition", "1s");
    });

    //Smooth color change on hamburger
    $(".navbar-toggle").hover(function(){
        $(this).css("background-color", "white");
        $(this).css("transition", ".5s");
    },
    function(){
        $(this).css("background-color", "#4183D7");
        $(this).css("transition", ".5s");
    });

    /*$(".navbar-brand").hover(function(){
        $(this).css("box-shadow", "inset 0px -8px 0px 0px white");
        $(this).css("transition", ".5s");
    },
    function(){
        $(this).css("box-shadow", "none");
        $(this).css("transition", ".5s");
    });
    */

    //Smooth color change on soft G
    $(".btn-primary").hover(function(){
        $(this).css("background-color", "#3A539B");
        $(this).css("transition", "1s");
    },
    function(){
        $(this).css("background-color", "#4183D7");
        $(this).css("transition", "1s");
    });

    //Smooth color change on hard G
    $(".hard").hover(function(){
        $(this).css("background-color", "#CF000F");
        $(this).css("transition", "1s");
    },
    function(){
        $(this).css("background-color", "#F22613");
        $(this).css("transition", "1s");
    });


    //Custom Message for button loop
    $counter=0;

    $(".hard").click(function(){
        if($counter == 0){
            $(".more").text("Do you like being wrong?");
            $counter++;
        }  

        else if($counter == 1){
            $(".more").text("I too was dropped on my head as a child");
            $counter++;
        } 

        else if($counter == 2){
            $(".more").text("Is your name George by any chance?");
            $counter++;
        }   

        else if($counter == 3){
            $(".more").text("I'm assuming red is your favorite color");
            $counter++;
        }   

        else if($counter == 4){
            $(".more").text("There is no war in Ba Sing Se");
            $counter++;
        }  

        else if($counter == 5){
            $(".more").text("I could do this all day");
            $counter++;
        }  

        else if($counter == 6){
            $(".more").text("Just kidding");
            $counter++;
        }  

        else if($counter == 7){
            $(".more").text("I have one last question for you");
            $counter=0;
        }  
    });
});