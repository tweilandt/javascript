function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        output = [0];
        for (var i = 1; i < n; i++){
            if (i === 1){
                output.push(1);
            } else if (i > 1) {
                output.push(output[i-1] + output[i-2]);
            }
        }
        return output;
    }