function f (n){
    let result =[];
    while( n > 9 ){
        result.unshift(n%10);
        n = Math.floor(n/10);
    }
    result.unshift(n);
    return result
}

console.log(f(965))







