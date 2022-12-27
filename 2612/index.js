// const samplePromise=()=>Promise.resolve("A");

// function f(){
//     samplePromise().then(result=>console.log(result));
//     console.log("B");
// } 
// async function g(){
//     console.log(await samplePromise());
//     console.log("B");
// }
// f();
// g()


// function* getData(){
//     yield 1;
//     yield 2;
// }
// const g=getData();
// const generator=getData();

// console.log(g.next());
// console.log(g.next());
// console.log(generator.next());

// //array;
// console.log([...g]);


// for(let i of g){
//     console.log(i);
// }


// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function* getData(){
//     let id=user.length;
//     while(true){
//         yield ++id;
//     }
// }
// const g=getData();


// let user=[
// {id:1,name:"user1"},
// {id:2,name:"user2"},
// {id:3,name:"user3"},
// {id:4,name:"user4"},
// {id:5,name:"user5"},
// {id:6,name:"user6"},
// ];
// const onDelete=(id)=>{
// let res=user.filter((v)=>v.id !==id);
// user=res;
// }


// const add =()=>{
// user=[...user,{id:g.next().value,name:"user7"}]
// }
// add();
// onDelete(3);
// add();
// add();
// add();
// console.log(user);
// let a = 0,
//   b = 0,
//   c = null;

// a ||= 42;
// b &&= 22;
// c ??= 55;

// console.log(a, b, c);

// function SingleCharacterChangePalindrome(str) {
//     const diff = [...str].reverse().filter((x, i) => x != str[i]).length;
  
//     return diff == 2 || (diff == 0 && str.length % 2 == 1);
//   }
//   console.log(SingleCharacterChangePalindrome("abbaa"));


// console.log("Hello World!");2