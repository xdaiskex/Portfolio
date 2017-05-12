<?php
	include "connection.php";
	session_start();

	$_SESSION['login'] = false;
	$_SESSION['valid'] = false;

	$select = "SELECT
		user_id,
		username,
		password,
		first,
		last,
		access
	FROM users";

	$result = $mysqli->query($select);

	if($_SESSION['login'] == false){
		while($row = $result->fetch_array(MYSQLI_ASSOC)){
			if(isset($_POST['username'])){
				$_SESSION['username'] = $_POST['username'];
			}
			if(isset($_POST['password'])){
				$_SESSION['password'] = $_POST['password'];
			}

			if(isset($_SESSION['username']) && isset($_SESSION['password'])){
				if($_SESSION['username'] == $row['username'] && $_SESSION['password'] == $row['password']){
					$_SESSION['login'] = true;
					$_SESSION['user_id'] = $row['user_id'];
					$_SESSION['first'] = $row['first'];
					$_SESSION['last'] = $row['last'];
					$_SESSION['access'] = "user";
					$_SESSION['fullName'] = $_SESSION['first']." ".$_SESSION['last'];
					$_SESSION['valid'] = true;
					break;
				}
				else{
					$_SESSION['valid'] = false;
				}
			}
		}
		if(isset($_SESSION['valid'])){
			if($_SESSION['valid'] == true){
				echo $_SESSION['fullName'];
			}
			else if($_SESSION['valid'] == false){
				echo "Invalid login credentials.";
			}
		}
	}
?>