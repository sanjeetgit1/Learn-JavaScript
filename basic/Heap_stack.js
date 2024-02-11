// stack(primitive datatype), heap(non-primitive datatype)


let myname ="sanjeet"

let anothername=myname;
// anothername="vishal"

console.log(myname)
console.log(anothername)

let userone={
    name:"sanjeet",
    email:"sanjeet@google.com"
}

let usertwo = userone

usertwo.email="vishale@google.com"

console.log(userone.email)
console.log(usertwo.email)