<?php
	include "connection.php";
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Chat</title>

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

	<div class="jumbotron">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<h2>Welcome to office after hours</h2>
					<br>
					<p>
						-Feel free to use whatever methods you'd like for grade negotiations-
					</p>
					<br><br>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-6 col-md-offset-3">
				<h2 class="center chatTitle">Live Chat</h2>
				<?php
					if(isset($_SESSION['fullName'])){
				?>
						<div id="chatLog"></div>

						<form action="chat.php" method="post" id="chat">
							<div class="input-group">
						  		<input type="text" class="form-control" name="chatMessage" id="chatMessage" placeholder="Write a message">
						  		<span class="input-group-btn">
						    		<button type="submit" id="chatSubmit" class="btn btn-primary black">Send</button>
						  		</span>
							</div>
						</form>
				<?php
					}
					else{
				?>
				<h3 class="center">Please <a href="login.html">login</a> to use the chat.</h3>

				<?php
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