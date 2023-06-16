//how to print given object is empty or not?

let emp={}
let user={
    id:101,
    name:"kevika",
    loc:'kadapa'
}

console.log(Object.keys(user));
console.log(Object.keys(user).length);
console.log(Object.keys(user).length>0);
console.log(Object.keys(emp).length>0);

if(Object.keys(user).length>0){
    console.log("not an empty Object");

}
else{
    console.log("empty Object");

}