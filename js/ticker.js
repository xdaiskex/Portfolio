/*(function($) {
    var duration = 2500;  // change this to change rotation time in milliseconds
    var current = 1;
    var tricker = $(".tricker");
    var height = tricker.height();
    var number = tricker.children().length;
    var first = tricker.children().first();

    setInterval(function() {
        var interv = current * -1 * height;
        first.css("margin-top", interv + "px");

        if (current == number) {
            first.css("margin-top", "0px");
            current = 1;
        }
        else {
            current++;
        }
        console.log("Current: " + current);
        console.log("Duration: " + duration);
    }, duration);
})(jQuery);
*/

(function($) {
    var duration = 2500;  // change this to change rotation time in milliseconds
    var current = 1;
    var tricker = $(".tricker");
    var height = tricker.height();
    var number = tricker.children().length;
    var first = tricker.children().first();

    setTimeout(transition, 2000);

    //Song Start
    setTimeout(transition, 4000);
    setTimeout(transition, 5500);
    setTimeout(transition, 7000);
    //To get jobs is my real test
    setTimeout(transition, 10500);
    //To train them is my cause
    setTimeout(transition, 13500);

    //I will travel 
    setTimeout(transition, 17000);
    //Across downtown
    setTimeout(transition, 18500);
    //Searching far and wide
    setTimeout(transition, 20100);
    //These interviews
    setTimeout(transition, 23600);
    //To understand
    setTimeout(transition, 25100);
    //The reason that I cried
    setTimeout(transition, 26600);

    //^PERFECT^
    
    //Interviews!
    setTimeout(transition, 29600);
    //Gotta pass them all
    setTimeout(transition, 30600);
    //There's too many
    setTimeout(transition, 31800);
    //I'm breaking down mentally
    setTimeout(transition, 34300);

    //Interviews!
    setTimeout(transition, 36500);
    //Oh please make this end
    setTimeout(transition, 37400);
    //Let me sleep and just pretend
    setTimeout(transition, 39600);

    //Interviews!
    setTimeout(transition, 42700);
    //Gotta pass them all
    setTimeout(transition, 43700);
    //My face so blue
    setTimeout(transition, 44900);
    //Don't really know what to do
    setTimeout(transition, 47400);

    //You teach me and I'll teach you
    setTimeout(transition, 50000);
    //Interviews
    setTimeout(transition, 53200);
    //Gotta pass them all
    setTimeout(transition, 55800);
    //Gotta pass them all
    setTimeout(transition, 57300);
    //Interviews
    setTimeout(transition, 59000);
    //Please hire me
    setTimeout(transition, 63000);

    //console.log("Current: " + current);

    function transition() {
        var interv = current * -1 * height;
        first.css("margin-top", interv + "px");

        if (current == number) {
            first.css("margin-top", "0px");
            current = 1;
        }
        else {
            current++;
        }
        //console.log("Current: " + current);
        //console.log("Duration: " + duration);
    }
})(jQuery);