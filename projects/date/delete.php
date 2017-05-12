<?php
	include "connection.php";
	session_start();

	if(isset($_SESSION['professor']) && isset($_POST['delete_id']))
	{
		$id = $_SESSION['professor'];
		$comment = $_POST['delete_id'];

		$delete = "DELETE 
		FROM comments
		WHERE Id = '$comment'";	

		$mysqli->query($delete);

		$select = "SELECT
			Id,
			first,
			message,
			user_id,
			comment_id
		FROM comments
		WHERE comment_id = '$id'";

		$result = $mysqli->query($select);

		while($row = $result->fetch_array(MYSQLI_ASSOC)){
			echo "<div class='commentBlock'>";
			echo "<h3>".$row['first'].": ";
			echo "<span>".$row['message']."</span></h3>";
			if(isset($_SESSION['user_id'])){
				if($_SESSION['user_id'] == $row['user_id']){
					echo "<div class='deleteComment' id='".$row['Id']."'>Delete comment</div>";
				}
			}
			echo "</div>";
		}
	}
	else{
		$id = $_SESSION['professor'];

		$select = "SELECT
			Id,
			first,
			message,
			user_id,
			comment_id
		FROM comments
		WHERE comment_id = '$id'";

		$result = $mysqli->query($select);

		while($row = $result->fetch_array(MYSQLI_ASSOC)){
			echo "<div class='commentBlock'>";
			echo "<h3>".$row['first'].": ";
			echo "<span>".$row['message']."</span></h3>";
			if(isset($_SESSION['user_id'])){
				if($_SESSION['user_id'] == $row['user_id']){
					echo "<div class='deleteComment' id='".$row['Id']."'>Delete comment</div>";
				}
			}
			echo "</div>";
		}
	}
?>

