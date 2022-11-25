// let obj = {
//     id :1,
//     name:'Webbrain'
// };

// for(let i in obj){
//     console.log(i);
    
// }



// let schedule = {};
// return isEmpty(schedule);

// let schedule={
//     getUp:8-30
// };
// console.log(isEmpty(schedule));







let series = {
    John :100,
    Ann :160,
    Pete :130

}
for (let i in series){
    for(let j in series){
        if(i < j)
        console.log(j);
        else console.log(i);
    }
}

