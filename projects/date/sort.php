<?php
	include "connection.php";
	session_start();

	$movies = false;
	$cartoons = false;
	$animes = false;

	if(isset($_POST['movie'])){
		$movie = $_POST['movie'];
		$movies = true;
		//echo $movie;
	}

	if(isset($_POST['cartoon'])){
		$cartoon = $_POST['cartoon'];
		$cartoons = true;
		//echo $cartoon;
	}

	if(isset($_POST['anime'])){
		$anime = $_POST['anime'];
		$animes = true;
		//echo $anime;
	}
	
	$selectMCA = "SELECT
		Id,
		name,
		image
	FROM professors";

	$resultMCA = $mysqli->query($selectMCA);

	$selectM = "SELECT
		Id,
		name,
		image
	FROM professors
	WHERE genre = 'movie'";	

	$resultM = $mysqli->query($selectM);

	$selectC = "SELECT
		Id,
		name,
		image
	FROM professors
	WHERE genre = 'cartoon'";	

	$resultC = $mysqli->query($selectC);

	$selectA = "SELECT
		Id,
		name,
		image
	FROM professors
	WHERE genre = 'anime'";	

	$resultA = $mysqli->query($selectA);

	$selectMC = "SELECT
		Id,
		name,
		image
	FROM professors
	WHERE genre = 'movie'
	OR genre = 'cartoon'";	

	$resultMC = $mysqli->query($selectMC);

	$selectMA = "SELECT
		Id,
		name,
		image
	FROM professors
	WHERE genre = 'movie'
	OR genre = 'anime'";	

	$resultMA = $mysqli->query($selectMA);

	$selectCA = "SELECT
		Id,
		name,
		image
	FROM professors
	WHERE genre = 'cartoon'
	OR genre = 'anime'";	

	$resultCA = $mysqli->query($selectCA);

	if($movies == true && $cartoons == true && $animes == true){
		while($row = $resultMCA->fetch_array(MYSQLI_ASSOC)){
			echo "<div class='col-md-4 center professorSort'>";
			echo "<h3>".$row['name']."</h3>";
			echo "<a href='profile.php?professor=".$row['Id']."'>";
			echo "<img src='".$row['image']."' alt='".$row['name']."' class='professorImage'>";
			echo "</a>";
			echo "</div>";
		}
	}

	if($movies == true && $cartoons != true && $animes != true){
		while($row = $resultM->fetch_array(MYSQLI_ASSOC)){
			echo "<div class='col-md-4 center professorSort'>";
			echo "<h3>".$row['name']."</h3>";
			echo "<a href='profile.php?professor=".$row['Id']."'>";
			echo "<img src='".$row['image']."' alt='".$row['name']."' class='professorImage'>";
			echo "</a>";
			echo "</div>";
		}
	}

	if($cartoons == true && $animes != true && $movies != true){
		while($row = $resultC->fetch_array(MYSQLI_ASSOC)){
			echo "<div class='col-md-4 center professorSort'>";
			echo "<h3>".$row['name']."</h3>";
			echo "<a href='profile.php?professor=".$row['Id']."'>";
			echo "<img src='".$row['image']."' alt='".$row['name']."' class='professorImage'>";
			echo "</a>";
			echo "</div>";
		}
	}

	if($animes == true && $cartoons != true && $movies != true){
		while($row = $resultA->fetch_array(MYSQLI_ASSOC)){
			echo "<div class='col-md-4 center professorSort'>";
			echo "<h3>".$row['name']."</h3>";
			echo "<a href='profile.php?professor=".$row['Id']."'>";
			echo "<img src='".$row['image']."' alt='".$row['name']."' class='professorImage'>";
			echo "</a>";
			echo "</div>";
		}
	}

	if($movies == true && $cartoons == true && $animes != true){
		while($row = $resultMC->fetch_array(MYSQLI_ASSOC)){
			echo "<div class='col-md-4 center professorSort'>";
			echo "<h3>".$row['name']."</h3>";
			echo "<a href='profile.php?professor=".$row['Id']."'>";
			echo "<img src='".$row['image']."' alt='".$row['name']."' class='professorImage'>";
			echo "</a>";
			echo "</div>";
		}
	}

	if($movies == true && $animes == true && $cartoons != true){
		while($row = $resultMA->fetch_array(MYSQLI_ASSOC)){
			echo "<div class='col-md-4 center professorSort'>";
			echo "<h3>".$row['name']."</h3>";
			echo "<a href='profile.php?professor=".$row['Id']."'>";
			echo "<img src='".$row['image']."' alt='".$row['name']."' class='professorImage'>";
			echo "</a>";
			echo "</div>";
		}
	}

	if($cartoons == true && $animes == true && $movies != true){
		while($row = $resultCA->fetch_array(MYSQLI_ASSOC)){
			echo "<div class='col-md-4 center professorSort'>";
			echo "<h3>".$row['name']."</h3>";
			echo "<a href='profile.php?professor=".$row['Id']."'>";
			echo "<img src='".$row['image']."' alt='".$row['name']."' class='professorImage'>";
			echo "</a>";
			echo "</div>";
		}
	}
?>

