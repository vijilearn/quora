
// let aver = (arr) =>{
//     let sum=0;
//     for(let i = 0 ;i<arr.length;i++){
//         sum = sum+arr[i];
//     }
//     return sum/arr.length;
// }

// // let arr=[23,35,45,55,61,71,11,25];
// // let av= aver(arr);
// // console.log(av);

// // const object ={
// //     message:"hello world",
// //     logMessage(){
// //         console.log(this.message);
// //     }
// // };

// // setTimeout(object.logMessage,1000);

// let length = 7;
// function callback(){
//     console.log(this.length);
// }
// const object = {
//     length :3,
//     method(callback){
//         callback();
//     },
// };

// object.method(callback,1,2);

let arr=[10,20,80,70];

let res1=arr.every((el)=> el % 10 == 0);

let res=arr.filter((el) =>{
   return el % 10 == 0
})

let minVal = arr.reduce((acc,el) => {
    if(acc<el){
        return acc;
    } else{
        return el;
    }
})