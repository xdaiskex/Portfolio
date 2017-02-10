function doSomething(){
	var xhttp;

	if(window.XMLHttpRequest){
		//code for modern browsers
		xhttp = new XMLHttpRequest();
	}
	else{
		//code for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhttp.open("GET", "data.json");
	xhttp.send();

	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){

		}
	};
}





