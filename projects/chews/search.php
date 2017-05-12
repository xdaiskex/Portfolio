<?php
	ini_set('display_errors', '1');
    ini_set('error_reporting', E_ALL);
    
	if(isset($_POST['search2'])){
		require_once('flickr.php'); 
		$Flickr = new Flickr('ca370d51a054836007519a00ff4ce59e'); 
		$data = $Flickr->search($_POST['search2']); 
		foreach($data['photos']['photo'] as $photo) { 
			echo '<img src="' . 'http://farm' . $photo["farm"] . '.static.flickr.com/' . $photo["server"] . '/' . $photo["id"] . '_' . $photo["secret"] . '.jpg" class="col l3 m6 s12 flickrImg" alt="'.$photo["id"].'">'; 
		} 
	}
?>