import React, {useState, useEffect} from 'react'


function Color({name}){
     const [color, setColor]=useState('black');
    
        console.log('render')  //primitive walo ke saath ek baar aur render hoga: ye primitive value ke liye "bailout" kr jata hai
        console.log(name)
        // useEffect(callback fn, dependency)
        useEffect(()=>{                             //jab hamare pass dom manupilation wali cheez hoti hai to useEffect ke andar daldo
            console.log('useEffect executed')
            document.body.style.backgroundColor=color;  // "ye stmt" tabhi execute ho jab color change hoga, 
        },[color])  // ye sbse last me execute hoga
    
        console.log('second')
    
        return(
            <>
            <h1>Background Color Changer</h1>
            <button style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>Red</button>
            <button style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')}>Blue</button>
            <button style={{backgroundColor:'yellow'}} onClick={()=>setColor('yellow')}>Yellow</button>
            <button style={{backgroundColor:'orange'}} onClick={()=>setColor('orange')}>Orange</button>
            <button style={{backgroundColor:'green'}} onClick={()=>setColor('green')}>Green</button>
            </>
        )
}
export default React.memo(Color);