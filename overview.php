<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'imdb.wemakesites.net/api/nm0000115?api_key=86627036-fc10-4586-a9ea-21804a286114'); // Nicolas Cage
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);
echo json_encode($output);
curl_close($ch);
?>