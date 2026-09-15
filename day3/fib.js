// let n1=0,n2=1,nextterm
// console.log("Fibonacci Series:")
// for(let i=1;i<=10;i++){
//     console.log(n1)
//     nextterm=n1+n2
//     n1=n2
//     n2=nextterm
// }

fib=[0,1]
for(i=2;i<=10;i++){
    fib[i]=fib[i-1]+fib[i-2]
}
console.log(fib)