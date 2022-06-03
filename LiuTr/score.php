<h1>一加到十for</h1>

<?php
$sum=0;
for($i=1;$i<=10;$i++){
    $sum+=$i;
}
echo $sum ;

?>

<h1>一加到十while</h1>

<?php
$sum=0;
$i=1;
while($i<=10){
    $sum+=$i;
    $i++;
}
echo $sum ;

?>

<h1>一加到十do while</h1>
<?php
$sum=0;
$i=1;
do{
    $sum+=$i;
    $i++;
}while($i<=10);
echo $sum ;

?>

<H1>遞增星星-倒直角三角形</H1>
<?php
$s=5;   //宣告一個變數為列數
for($i=0 ; $i<$s ; $i++){
    for($j=$i-1 ; $j<$s-1 ; $j++){
    echo "*";
    }
    for($k=0 ; $k<$i+1 ; $k++){
    echo "&nbsp";
    }
echo "</br>";
}
?>

<H1>遞增星星-正直角三角形</H1>
<?php
$s=5;   //宣告一個變數為列數
for($i=0 ; $i<$s ; $i++){
    for($k=$i-1 ; $k<$s-7 ; $k++){
    echo "&nbsp";
    }
    for($j=0 ; $j<$i+1 ; $j++){
        echo "*";
        }
echo "</br>";
}
?>

<H1>遞增星星-正三角形</H1>
<?php
$s=5;   //宣告一個變數為列數
for($i=0 ; $i<$s ; $i++){
    for($k=2*$i+1 ; $k<$s+4 ; $k++){
    echo "&nbsp";
    }
    for($j=0 ; $j<2*$i+1 ; $j++){
        echo "*";
        }
echo "</br>";
}
?>

<H1>遞增星星-菱形</H1>
<?php   //宣告一個變數為列數
$n=9; 
for($i=1;$i<=$n;$i++){
}
?>


