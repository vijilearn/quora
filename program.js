

//  function findLarge(arr,n){
//   for (let i=0; i<arr.length;i++){
//     if(n< arr[i]){
//         n=arr[i];
//     }
//   }
//   return n;
// }

// let arr = [23,3,5,7,12,4,8];
// let number= prompt("Enter the number to be checked");

// let result = findLarge(arr,number);
// console.log(result);

function dupFind(str) {
    let ans="";
    for (let i=0; i < str.length; i++)
    { let curr=str[i];
      if (ans.indexOf(curr)==-1)
        {
            ans+= curr;     
        }
       
    }
    console.log(ans);
}

let str="aabbbtrrnncfffkd";
console.log("The original word",str);
dupFind(str);
