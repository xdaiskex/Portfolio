$(document).ready(function(){
	var mailCounter = 0;
	$("#mail").on('submit', function(event){
		event.preventDefault();
		if(mailCounter < 3){
			var mail = $(this).serialize();
			$.post('mail.php', mail, function(data){
				var result = $.trim(data);
				if(result == "success"){
					Materialize.toast('<b>Mail successfully sent!</b>', 4000, 'blue');
				}
				else{
					Materialize.toast('<b>Error sending mail!</b>', 4000, 'red');
				}
				mailCounter++;
			});
		}
		else{
			Materialize.toast('<b>Sent too much mail!</b>', 4000, 'black');
		}
	});
});