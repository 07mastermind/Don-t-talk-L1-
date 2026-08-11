import React from 'react'
import ReactDOM from 'react-dom/client'  //import latest js ka part hai, it was not existing before
//                      react                       render
// React.createElement() => react element (js Object) => HTML element
// const ele=React.createElement('h1',{},'kaise ho')
// console.log(ele)  //Object

// const newEle=<h1>Hello</h1>
//   babel:(transpiler)         react                   render
// JSX => React.createElement() => react element(JSObject) => HTML Element


const name='imran'
const obj ={
    backgroundColor:'red',
    color:'yellow'
}

//React Element 
const newEle=(
    <>
    <h1 id='one' className='op' music_attribute='hey' >Hello, to hai {name}</h1>  //html jaisa lgraha hai,ye exactly html nahi hai!
    <h2 style={{backgroundColor:'red',color:'yellow'}}>kaise ho</h2>
    </>
)

// React component
// function based component
function greet(){
    return <h1>function hai bs</h1>
}

const meet =()=>{
    return <h2>rc fn hai bs, ab kaise bhi banalo</h2>
}

const newEle2=greet();
const newEle3=meet();

const newE=<>{greet()} {meet()}</>
const Reactroot =ReactDOM.createRoot(document.getElementById('root'))

Reactroot.render(meet());
Reactroot.render(newE);  //ye fn js ka part hai,{}me liko


