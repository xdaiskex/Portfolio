<?php
	include "connection.php";
	session_start();

	if(isset($_SESSION['first'])){
		$first = $_SESSION['first'];
	}

	if(isset($_SESSION['last'])){
		$last = $_SESSION['last'];
	}

	if(isset($_SESSION['user_id'])){
		$user = $_SESSION['user_id'];
	}

	if(isset($_SESSION['professor'])){
		$professor = $_SESSION['professor'];
	}

	if(isset($_POST['comment'])){
		$comment = $_POST['comment'];
		$comments = htmlspecialchars("".$comment."", ENT_QUOTES);
	}

	if(isset($_SESSION['first']) && isset($_SESSION['user_id']) && isset($_POST['comment'])){
		if($comment != ""){
			$insert = "INSERT INTO comments (
					first,
					last,
					message,
					user_id,
					comment_id)
				VALUES (
					'".addslashes($first)."',
					'".addslashes($last)."', 
					'".addslashes($comments)."', 
					'".addslashes($user)."',
					'".addslashes($professor)."')"; 

			if ($mysqli->query($insert) === TRUE){
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
		}
	}
?>