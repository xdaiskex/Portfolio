<?php
	include "connection.php";
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Home</title>

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
					<h2>
						<?php 
							if(isset($_SESSION['fullName']) && $_SESSION['user_id']){
								echo "Hello ".$_SESSION['fullName'].", and welcome to the forbidden paradise.";
							}
							else{
								echo "Welcome new visitor, please contain your urges.";
							}
						?>
					</h2>
					<br>
					<p>-Insert professor related innuendos here-</p>
					<br><br>
					<p class="center">
						<?php 
							if(isset($_SESSION['fullName'])){
							?>
								<a href="logout.php" class="btn btn-primary btn-lg col-lg-2 col-lg-offset-5" role="button">Logout</a>
							<?php
							}
							else{
								?>
								<a href="login.html" class="btn btn-primary btn-lg col-lg-2 col-lg-offset-5" role="button">Login</a>
							<?php
							}
						?>
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="container search">
		<div class="row">
			<div id="searchArea" class="col-md-6 col-md-offset-3 center form-group">
				<label for="search">Looking for love/extra credit?</label>
				<p>Search for a professor today!</p>
				<input type="search" name="search" id="search" placeholder="Search" class="form-control">
			</div>
		</div>
		<div class="row">
			<div class="loader center">
				<img src="img/loading3.gif" alt="loader">
			</div>
			<div id="update" class="col-md-8 col-md-offset-2"></div>
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