<?php
	include "connection.php";
	session_start();

	$_SESSION['taken'] = false;

	$select = "SELECT
		username
	FROM users";

	$result = $mysqli->query($select);

	if($_SESSION['taken'] == false){
		while($row = $result->fetch_array(MYSQLI_ASSOC)){
			if(isset($_POST['username'])){
				$_SESSION['username'] = $_POST['username'];
			}

			if(isset($_SESSION['username'])){
				if($_SESSION['username'] == $row['username']){
					$_SESSION['taken'] = true;
				}
			}
		}
	}

	if($_SESSION['taken'] == true){
		if($_SESSION['username'] == "Joseph_Fanfarelli"){
			echo "(".$_SESSION['username']." is happily taken)";
		}
		else if($_SESSION['username'] == "Liam_Neeson"){
			echo "(".$_SESSION['username']." is Bryan Mills in Taken)";
		}
		else{
			echo "(".$_SESSION['username']." is taken)";
		}
	}
	else if($_SESSION['taken'] == false && $_SESSION['username'] != ""){
		if($_SESSION['username'] == "username"){
			echo "(".$_SESSION['username']." is uncreative, but available)";
		}
		else{
			echo "(".$_SESSION['username']." is available)";
		}
	}
?>