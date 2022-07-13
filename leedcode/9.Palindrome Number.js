var isPalindrome = function(x) {

    // x < 0 or x > (2^32 - 1) , false;
    if(x < 0 || x > Math.pow(2, 31) -1){
        return false;
    }else{
        let y = Number(x.toString().split("").reverse().join(""));
        if(x == y){
            return true;
        }else{
            return false; 
        }
    }
 
};