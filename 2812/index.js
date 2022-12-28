// ownKeys

// let user={
//     name:"wba",
//     _pw:1234,
// }
// let proxy=new Proxy(user,{
//     ownKeys(target){
//         return Object.keys(target).filter((vl)=>!vl.startsWith("_"))
//     }
// })
// console.log(proxy);

// for(vl in proxy){
//     console.log(vl);
// }

// let range={
//     from:1,
//     to:10,
// }
// let proxy=new Proxy(range,{
//     has(target,prop){
//         return target.from <=prop&&target.to >= prop;
//     }
// })
// console.log(11 in proxy);


let user={name:"Muhammad",_pw:"1234"}
Reflect.set(user,"surname","Nurmirzayev")
