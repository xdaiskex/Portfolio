<?php
	include "connection.php";
	session_start();

	$_SESSION['validPass'] = false;

	if($_SESSION['validPass'] == false){
		if(isset($_POST['password'])){
			$_SESSION['password'] = $_POST['password'];
			$length = strlen($_SESSION['password']);
		}

		if(isset($_SESSION['password'])){
			if($length >= 6){
				$_SESSION['validPass'] = true;
			}
		}
	}

	if($_SESSION['validPass'] == true){
		if($length > 20){
			echo "(Oh god I hope you wrote that down)";
		}
		else if($length == 6){
			echo "(Password length requirement -barely- met)";
		}
		else{
			echo "(Password length requirement met)";
		}
	}
	else if($_SESSION['validPass'] == false && $length != 0){
		if($length == 5){
			echo "(Literally just 1 more letter)";
		}
		else if($length == 1){
			echo "(Are you even trying)";
		}
		else{
			echo "(6 character length requirement)";
		}	
	}
?>