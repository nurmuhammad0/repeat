// // Carry function
// function getData(a){
//     return (b)=>{
//         return (c)=>{
//             return a+b+c;
//         }
//     }
// };
// console.log(getData(1)(2)(3));











// //just use for math
// const operations=(type)=>{
//     return (a)=>(b)=>(c)=>{
//         switch(type){
//             case "add":
//                 return a+b+c;
//                 break;
//                 case "delete":
//                 return a/b/c;
//                 break;
//                 case "multiply":
//                 return a*b*c;
//                 break;
//         }
//     }
// }
// const math=operations("multiply");
// console.log(math(2)(2)(4));