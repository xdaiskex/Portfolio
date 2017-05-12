<?php
	include "connection.php";
	session_start();

	if(isset($_SESSION['first'])){
		$first = $_SESSION['first'];
	}

	if(isset($_SESSION['user_id'])){
		$user = $_SESSION['user_id'];
	}

	if(isset($_SESSION['first']) && isset($_SESSION['user_id'])){
		$select = "SELECT
			chat_id,
			first,
			message,
			user_id
		FROM chat";

		$result = $mysqli->query($select);

		while($row = $result->fetch_array(MYSQLI_ASSOC)){
			echo "<p><strong>".$row['first']."</strong>: ".$row['message']."</p><br>";
		}
	}
?>