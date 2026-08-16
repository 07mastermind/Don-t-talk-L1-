let b=10;

function greet(){
    let a=20;

    function meet(){
        console.log(a)
        console.log(b)
    }
    return meet;
}

const n=greet()
// console.log(a) //scope error 
// meet() //error
n()  //but this is executed, once executed it will be removed from stack, t0o meet fn closer hai , ye apne dependencies ko bhi store kr ke rkhta hai,