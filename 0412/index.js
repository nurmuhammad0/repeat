// // filter()

// // let num=[1,2,4,5,7,8,9];
// // let res=num.filter((value,index)=> value < 5)
// // console.log(res);

// // let str=["orange","apple","kiwi","banana"];

// // let res=str.filter((value,index)=> value.length<5)
// // console.log(res);


// // let obj=[
// //     {id:1,year:2000,name:"Muhammad"},
// //     {id:2,year:2002,name:"Muhammadn"},
// //     {id:3,year:2001,name:"Muhammadm"},
// //     {id:4,year:2005,name:"Muhammada"},
// //     {id:5,year:2007,name:"Muhammadd"},
// //     {id:6,year:2006,name:"Muhammadk"}
// // ]
// // let res=obj.filter((value,index)=> value.year===2007)
// // console.log(res);



// // sort();



// // let num=[1,4,3,2,8,6,5,22];
// // let res=num.sort((a,b)=>a-b)
// // console.log(res);


// //  let str=["orange","apple","Kiwi","banana"];

// // let res=str.sort((a,b)=>a.localeCompare(b))
// // console.log(res);

// // console.log("salom"); S


// // function mystery() {
// //     var results =
// //       {sanity: 'Hello'};
// //     console.log(results);      
// //   }
// // mystery();
// let num=1;
// let boolean=true;
// sum=0;
//  for(let i=2;i<num;i++){
//    if(num % i== 0){
//       sum+=i;
//    }
   
//  }
//  if(sum>0){
//    console.log(`${num} is not prime`);
// }else{
//    console.log(`${num} is prime`);
// }


// for(i=2;i<10;i++){
//    console.log(`${i} karra jadvali`);
//    for(j=1;j<=10;j++){
//       console.log(`${i} * ${j} == ${i * j} `);
//       if(j==10){
//          console.log(" ");
//       }
//    }
//}

// let arr = [[1, "one", 2, "two"], [3, "three", 4, "four"]];
// for (var i = 0; i < arr.length; i++) {
//    for (var j = 0; j < arr[i].length; j++) {
//       console.log(arr [i][j]);
//    }
// }




// let obj={
//    title:"Webbrain",
//    age:2,
//    child:{
//       age:4,
//       name:"Webbrain",
//       child:{
//          age:3
//       }
//    }
// }
// let sum =obj.age;
// while("child" in obj){
//    obj=obj.child;
//    sum+=obj.age;
// }
// console.log(sum);


// let obj ={
//    if:1,
//    name:"Webbrain",
//    offline:true,
//    online:true,
//    individual:true
// }
// let res={};
// for(i in obj){
//    if(obj[i]===true|| obj[i]===false)
//    res[i]=obj[i]
// }

let str="Webr@in Ac@demy";
let str2=""
for(i of str){
   if(i==="@")
      str2+="a";

   else
      str2+=i
   
}
console.log(str2);
