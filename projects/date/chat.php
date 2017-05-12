<?php
	include "connection.php";
	session_start();

	if(isset($_SESSION['first'])){
		$first = $_SESSION['first'];
	}

	if(isset($_SESSION['user_id'])){
		$user = $_SESSION['user_id'];
	}
	
	if(isset($_POST['chatMessage'])){
		$message = $_POST['chatMessage'];
		$messages = htmlspecialchars("".$message."", ENT_QUOTES);
	}

	if(isset($_SESSION['first']) && isset($_SESSION['user_id']) && isset($_POST['chatMessage'])){
		if($message != ""){
			$insert = "INSERT INTO chat (
					first,
					message,
					user_id)
				VALUES (
					'".addslashes($first)."', 
					'".addslashes($messages)."', 
					'".addslashes($user)."')"; 

			if ($mysqli->query($insert) === TRUE){
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
			else{
				echo "Chat error!";
			}
		}
	}
?>