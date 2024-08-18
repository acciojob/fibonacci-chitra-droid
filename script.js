function fibonacci(num) {
// if(num===1){
// 	return 0;
// }
// if(num===2){
// 	return 1;
// }
// return fibonacci(num-1) + fibonacci(num-2);
	let fib = [0, 1];
    for(let i = 2; i <= num; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num-1];
}
console.log(fibonacci(7));


