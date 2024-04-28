function performOperation(a,b,callback) {
    console.log("CallBack Function is run successfully");
   return callback(a,b);
}

    function add(a,b) {
        var add = a + b;
        return add;
    }
    function sub(a,b) {
        var sub = a - b;
        return sub;
    }
    function multi(a,b) {
        var multi = a * b;
        return multi;
    }
    function divide(a,b) {
        var divide = a/b;
        return divide;
    }


console.log(performOperation(2,5,divide));