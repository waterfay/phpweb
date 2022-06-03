<!-- 第一種方式 -->

function moveZeroes(&$nums) {
        $len = count($nums);
        $index = 0;
        for($i = 0; $i < $len;$i++){
            if($nums[$i]!==0){
                $nums[$index] = $nums[$i];
                $index++;
            }    
        }
        for($index;$index < $len;$index++){
            $nums[$index] = 0;
        }
    }

<!-- 第二種方式 -->

function moveZeroes(&$nums) {
        $i = 0;
        foreach($nums as $key => $val) {
            if($nums[$key] == 0) {
                unset($nums[$key]);
                $i++;
            }
        }
                    
        while($i > 0) {
            $nums[] = 0;
            $i--;
        }
    }

    <!-- 第三種方法 -->
    function moveZeroes(&$nums) {
        $i = 0;
        foreach($nums as $key => $val) {
            if($nums[$key] == 0) {
                unset($nums[$key]);
                array_push($nums, 0);
                $i++;
            }
        }
                    
    }