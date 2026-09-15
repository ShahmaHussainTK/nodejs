// let num=5
// let fac=1

// for(let i=1;i<=num;i++){
//     fac=fac*i
// }
// console.log(fac)

function fac(n){
if(n===0){
 return 1
}
   return n*fac(n-1)
}
console.log(fac(5))
