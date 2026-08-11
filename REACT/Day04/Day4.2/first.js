import React from 'react'
import ReactDOM from 'react-dom/client'


const ele=<h1>Hello Everyone</h1>

// JSX : expression(jo kuch result lakede) , not statement
// const obj={
    // name:'imran'
// }
// const arr=[29,22,'imm'] //2922imm will get

// props={
//     name:'imran',
//     age:20
// }
function Greet(pop){
    // console.log(pop) // props ek obj hai 
    return <p>Thankyou {pop.name} {pop.age}</p>
}

// const funEle1=greet()
// const funEle=<greet/> //error,jo aapka fn hai (component) uska first letter cap hona cahiye, to diffretiate from html eles.this is not rule of react
const funEle=<Greet name='imran' age='20'/>

const ele2=<h1 id='firest' className='hey'>hello</h1>

// Greet : fn call

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(funEle)