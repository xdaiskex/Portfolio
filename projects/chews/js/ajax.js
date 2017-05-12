$(document).ready(function(){
	//Get the name of the restaurant that's clicked and place it in step 4
	$("#results").delegate(".restaurant", "click", function(){
    	var name = $(this).children().text();
    	console.log(name);
    	$("#name").empty();
    	$("#name").append(name);
	});

	//After clicking on a restaurant, the Flickr API will return semi-relevant photos
	$("#results").delegate(".restaurant", "click", function(){
    	var name = $(this).children().text();
    	event.preventDefault();
		var restaurant = $(this).serialize();
		$.post('search.php', 'search2='+name, function(data){
			$("#result").html(data);
		});
	});
});