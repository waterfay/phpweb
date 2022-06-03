function removeElement(&$nums,$val) {
        $len=count($nums);
        $k=0;
        for($i=0;$i<$len;$i++){
            if($nums[$i]!==$val){
                $nums[$k]=$nums[$i];
                    $k++;
            }
        }
            return $k;
    }