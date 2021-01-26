<?php

//初始化curl函式
function load_contents($url)
{
$Curl = curl_init();
curl_setopt($Curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($Curl, CURLOPT_URL, $url);

$data = curl_exec($Curl);
curl_close($Curl);
return $data;
}
echo $content = load_contents('https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json?page=0&size=2000');


?>