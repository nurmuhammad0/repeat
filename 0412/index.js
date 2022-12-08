// CRUD
//Creat
//Read
//Update
//Delete

// // Read

// let users=[
//    {id:1,name:"Muhammad",age:18,job:"Front-end developer"},
//    {id:2,name:"Salohiddin",age:20,job:"Teacher"},
//    {id:3,name:"AbuBakr",age:12,job:"pupil"},
//    {id:4,name:"AbuTolib",age:23,job:"Support-menter"},
//    {id:5,name:"Umar",age:22,job:"Notiq"},
//    {id:6,name:"Usmon",age:19,job:"Shoir"},
//    {id:7,name:"Ali",age:16,job:"Kotib"},
//    {id:8,name:"Temur",age:14,job:"Vazir"},
// ]
// console.log(users[0]);

// function sortByAge(data){
//    return data.sort((a,b)=>b.age-a.age)
// }
// console.log(sortByAge(users));


// function filterByAge(user){
//    return user.filter((item)=>item.age>18)
// }
// console.log(filterByAge(users));



//Create


// let users=[
//    {id:1,name:"Muhammad",age:18,job:"Front-end developer"},
//    {id:2,name:"Salohiddin",age:20,job:"Teacher"},
//    {id:3,name:"AbuBakr",age:12,job:"pupil"},
//    {id:4,name:"AbuTolib",age:23,job:"Support-menter"},
//    {id:5,name:"Umar",age:22,job:"Notiq"},
//    {id:6,name:"Usmon",age:19,job:"Shoir"},
//    {id:7,name:"Ali",age:16,job:"Kotib"},
//    {id:8,name:"Temur",age:14,job:"Vazir"},
// ]


// function addUser(user){
//    users.push(user);
//    return users;
// }
// console.log(addUser({id:10,name:"Shamsiddin",age:22}));



// Update
// let users=[
//    {id:1,name:"Muhammad",age:18,job:"Front-end developer"},
//    {id:2,name:"Salohiddin",age:20,job:"Teacher"},
//    {id:3,name:"AbuBakr",age:12,job:"pupil"},
//    {id:4,name:"AbuTolib",age:23,job:"Support-menter"},
//    {id:5,name:"Umar",age:22,job:"Notiq"},
//    {id:6,name:"Usmon",age:19,job:"Shoir"},
//    {id:7,name:"Ali",age:16,job:"Kotib"},
//    {id:8,name:"Temur",age:14,job:"Vazir"},
// ]

// function updateUser(id,key,value){
//    return users.filter((item)=>(item.id===id?(item[key])=value:item));
// }
// console.log(updateUser(3,"age",14));



// Delete
let users=[
      {id:1,name:"Muhammad",age:18,job:"Front-end developer"},
      {id:2,name:"Salohiddin",age:20,job:"Teacher"},
      {id:3,name:"AbuBakr",age:12,job:"pupil"},
      {id:4,name:"AbuTolib",age:23,job:"Support-menter"},
      {id:5,name:"Umar",age:22,job:"Notiq"},
      {id:6,name:"Usmon",age:19,job:"Shoir"},
      {id:7,name:"Ali",age:16,job:"Kotib"},
      {id:8,name:"Temur",age:14,job:"Vazir"},
   ]
   

   function deleteUser(id){
      return users=users.filter((item)=>(item.id!==id?item:null))
   }
   deleteUser(3)
   console.log(deleteUser());