<?php//计算上个月
 if($month==1)
 {
     $prevyear=$year-1;
     $prevmonth=12;
 }
 else
 {
     $prevyear=$year;
     $prevmonth=$month-1;
 }
 
 //计算下个月
 if($month==12)
 {
     $nextyear=$year+1;
     $nextmonth=1;
 }
 else
 { 
     $nextyear=$year;
     $nextmonth=$month+1;
 }
?>