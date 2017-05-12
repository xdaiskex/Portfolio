<?php
	session_start();
	session_unset(); 
	session_destroy(); 
	header("refresh: 2; url = home.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Logout</title>

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
				<a href="#" class="navbar-brand"><span class="date">DATE MY </span><span class="professor">PROFESSOR</span></a>
			</div>

			<div class="collapse navbar-collapse" id="navbar-collapsing">
				<ul class="nav navbar-nav navbar-right">
					<li class="">
						<a href="#"> HOME </a>
					</li>
					<li class="">
						<a href="#"> PROFESSORS </a>
					</li>
					<li class="">
						<a href="#"> CHAT </a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
				<h1 class="signup">Successfully logged out!</h1>
				<br>
				<h2 class="center">Redirecting to home page...</h2>
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

	<!-- Test -->
	<script src="js/test.js"></script>
</body>
</html>