<!-- Local -->
<?php
	$host = "localhost";
	$user = "root";
	$pass = "higurashi";
	$database = "an103674";
	$mysqli = new mysqli($host, $user, $pass, $database);
	
	if($mysqli->error)
	{
		print "Error Connecting! Message: ".$mysqli->error;
	}
?>

<!-- Sulley -->
<?php
/*
	$host = "sulley.cah.ucf.edu";
	$user = "an103674";
	$pass = "higurashi";
	$database = "an103674";
	$mysqli = new mysqli($host, $user, $pass, $database);
	
	if($mysqli->error)
	{
		print "Error Connecting! Message: ".$mysqli->error;
	}
?>
*/