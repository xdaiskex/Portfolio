<?php
	include "connection.php";
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Professor Info</title>

	<!-- Reset CSS -->
	<link rel="stylesheet" type="text/css" href="css/reset.css">

	<!-- Latest compiled and minified Boostrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	<!-- Custom CSS -->
	<link rel="stylesheet" href="css/styles.css">
</head>
<body>
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapsing" aria-expanded="false">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a href="home.php" class="navbar-brand"><span class="date">DATE MY </span><span class="professor">PROFESSOR</span></a>
			</div>

			<div class="collapse navbar-collapse" id="navbar-collapsing">
				<ul class="nav navbar-nav navbar-right">
					<li class="">
						<a href="home.php"> HOME </a>
					</li>
					<li class="">
						<a href="professors.html"> PROFESSORS </a>
					</li>
					<li class="">
						<a href="chats.php"> CHAT </a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container">
		<div class="row">
			<?php
				if(isset($_GET['professor']))
				{
					$_SESSION['professor'] = $_GET['professor'];
					$id = $_SESSION['professor'];

					$select = "SELECT 
						Id,
						name,
						oneliner,
						gender,
						difficulty,
						quality,
						dateagain,
						hotness,
						image
					FROM professors
					WHERE Id = '$id'";	

					$result = $mysqli->query($select);

					while ($row = $result->fetch_array(MYSQLI_ASSOC))
					{
						echo "<div class='col-md-4 center professorProfile'>";
						echo "<img src='".$row['image']."' alt='".$row['name']."' class='professorImage'>";
						echo "<h3 class='professorName'>".$row['name']."</h3>";
						echo "<h3>\"".$row['oneliner']."\"</h3>";
						echo "</div>";

						echo "<div class='col-md-3 center hotness'>";
						if($row['hotness'] == 0){
							echo "<h3>Hotness</h3>";
							echo "<img src='img/hot2.png' alt='not' class='hot'>";
						}
						else if($row['hotness'] == 1){
							echo "<h3>Hotness</h3>";
							echo "<img src='img/hot.png' alt='hot' class='hot'>";
						}
						echo "</div>";

						echo "<div class='col-md-5 professorInfo'>";
						echo "<h3>Gender: <strong class='info'>".$row['gender']."</strong></h3>";
						echo "<h3>Difficulty: <strong class='info'>".$row['difficulty']."</strong></h3>";
						echo "<h3>Quality: <strong class='info'>".$row['quality']."</strong></h3>";
						if($row['dateagain'] == 0){
							echo "<h3>Would Date Again: <strong class='info'>No </strong></h3>";
						}
						else if($row['dateagain'] == 1){
							echo "<h3>Would Date Again: <strong class='info'>Yes </strong></h3>";
						}
						echo "</div>";
					}
				}
				else{
					header("Location: professors.html");
				}
			?>
		</div>
	</div>

	<div class="container commentChain">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<h2 class="commentTitle">Comments</h2>
				<div id="comments">
					<?php
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
					?>
				</div>
				<?php 
					if(isset($_SESSION['login'])){
						if($_SESSION['login'] == true){
				?>
				<form action="comment.php" method="post" id="commentForm">
					<div class="input-group">
						<input type="text" name="comment" class="form-control" id="commentMessage">
						<span class="input-group-btn">
				    		<button type="submit" id="commentSubmit" class="btn btn-primary black">Send</button>
				  		</span>
				  	</div>
				</form>
				<?php
						}
					}
				?>
			</div>
		</div>
	</div>

	<!--  jQuery -->
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

    <!-- Latest compiled and minified Boostrap JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<!-- Ajax -->
	<script src="js/ajax.js"></script>

	<!-- Custom jQuery -->
	<script src="js/jquery.js"></script>
</body>
</html>