let num=287152;

let n1=num;
let sum=0;
let count=0;

while(n1>0)
{
    let s= n1 % 10;
    sum = sum +s;
    count++;
    n1 =Math.floor(n1/10);
}
console.log(sum);
console.log(count);