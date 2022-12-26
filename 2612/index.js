const samplePromise=()=>Promise.resolve("A");

function f(){
    samplePromise().then(result=>console.log(result));
    console.log("B");
} 
async function g(){
    console.log(await samplePromise());
    console.log("B");
}
f();
g()