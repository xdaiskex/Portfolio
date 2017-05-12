$(document).ready(function(){
/*----Start of live search black magic----*/
	var xhr;

	if(window.XMLHttpRequest){
		//code for modern browsers
		xhr = new XMLHttpRequest();
	}
	else{
		//code for IE6, IE5
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhr.open("GET", "data.json");
	xhr.send();

	//Function fires if state changes
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			$('#search').keyup(function(){
				var searchField = $('#search').val();
				var myExp = new RegExp(searchField, "i");
				var error = false;
				var errorMessage = "<h2 class=\"center\"> No results found </h2>";
				//If something is typed into the search field, run this code
				if(searchField != 0){
					$.getJSON('data.json', function(data){
						var output = '<ul class="searchresults">';
						//Check to see if the string in the search box is relevant
						$.each(data, function(key, val){
							if((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1) || (val.genre.search(myExp) != -1)){
								error = true;
								output += '<li>';
								output += '<h2>' + val.name + '</h2>';
								output += '<img src="img/' + val.shortname + '.jpg" alt="' + val.name + '" class="ajaxPic">';
								output += '<br><br><p>"' + val.bio + '"</p>';
								output += '</li>';
							}
						});

						output += '</ul>';

						//Prints error message if no match found
						if(error == false){
							output += errorMessage;
						}

						//Delays loading to show loading icon
						setTimeout(function(){
							$(".loader").css("display", "none");
							$("#update").css("display", "block");
						}, 1500);
						$('#update').html(output);
					});
				}
				//If nothing is typed into the search box
				else{
					$('#update').html("");
				}
			});
		}
	};

	//Displays loader on call and hides content
	$(document).ajaxStart(function(){
		$(".loader").css("display", "block");
		$("#update").css("display", "none");
	});

/*----End of live search black magic----*/

	//After entering a username and clicking away
	$("#username").on('blur', function(event){
		event.preventDefault();
		var user = $(this).serialize();
		$.post('username.php', user, function(data){
			$("#userError").html(data);
		});
	});

	//After enting a password and clicking away
	$("#password").on('blur', function(event){
		event.preventDefault();
		var pass = $(this).serialize();
		$.post('password.php', pass, function(data){
			$("#passError").html(data);
		});
	});

	//Signing up
	$("#signup").on('submit', function(event){
		event.preventDefault();
		var signup = $(this).serialize();
		$.post('signup.php', signup, function(data){
			$("#signError").html(data);
			var result = $.trim(data);
			if(result == "Signup successful!"){
				$("#signup").fadeOut(1500);
				$(".signup").fadeOut(1500);
				$("#success").delay(1500).fadeIn();
			}
		});
	});

	//Logging in
	$("#login").on('submit', function(event){
		event.preventDefault();
		var login = $(this).serialize();
		$.post('login.php', login, function(data){
			var result = $.trim(data);
			console.log(result);
			if(result != "Invalid login credentials."){
				window.location.href = "home.php";
			}
			else{
				$("#loginError").html(result);
			}
		});
	});

/*----Start of sorting through professors----*/
	/*$("#sortForm").on('submit', function(event){
		event.preventDefault();
		var sort = $(this).serialize();
		$.post('sort.php', sort, function(data){
			var sortResult = $.trim(data);
			$("#sort").html(sortResult);
		});
	});*/

	$("#movie").on('click', function(event){
		var sort = $("#sortForm").serialize();
		$.post('sort.php', sort, function(data){
			var sortResult = $.trim(data);
			$("#sort").html(sortResult);
		});
	});

	$("#cartoon").on('click', function(event){
		var sort = $("#sortForm").serialize();
		$.post('sort.php', sort, function(data){
			var sortResult = $.trim(data);
			$("#sort").html(sortResult);
		});
	});

	$("#anime").on('click', function(event){
		var sort = $("#sortForm").serialize();
		$.post('sort.php', sort, function(data){
			var sortResult = $.trim(data);
			$("#sort").html(sortResult);
		});
	});
/*----End of sorting through professors----*/

	//Inserting a comment
	$("#commentForm").on('submit', function(event){
		event.preventDefault();
		var comment = $(this).serialize();
		$.post('comment.php', comment, function(data){
			var commentResult = $.trim(data);
			$("#comments").empty();
			$("#comments").html(commentResult);
			$("#commentMessage").val("");
		});
	});

	//Deleting a comment
	$(document).on('click', '.deleteComment', function(event){
		var del_id = $(this).attr('id');
		$.post('delete.php', 'delete_id='+del_id, function(data){
			$("#comments").empty();
			$("#comments").html(data);
		});
	});

	//Updates the scroll position for the chat
	function updateScroll(){
	    var element = document.getElementById("chatLog");
	    element.scrollTop = element.scrollHeight;
	}

	//Chat message submission
	$("#chat").on('submit', function(event){
		event.preventDefault();
		var chat = $(this).serialize();
		$.post('chat.php', chat, function(data){
			var chatResult = $.trim(data);
			$("#chatLog").empty();
			$("#chatLog").html(chatResult);
			$("#chatMessage").val("");
			updateScroll();
		});
	});

	//Checks to see the end of the path name
	var url = window.location.pathname;
	var array = url.split('/');
	var lastsegment = array[array.length-1];

	//If on the chats page, then run this interval to constantly refresh data every second
	if(lastsegment == "chats.php"){
		setInterval(function(){
			$.get('messages.php', function(data) {
		    	//console.log("Refreshing chat...");
		    	$("#chatLog").empty();
				$("#chatLog").html(data);
				updateScroll();
		    });
		}, 1000);
	}

	//If on the profile page, run this interval to constantly refresh data every second
	if(lastsegment == "profile.php"){
		setInterval(function(){
			$.get('delete.php', function(data) {
		    	$("#comments").empty();
				$("#comments").html(data);
		    });
		}, 1000);
	}
});