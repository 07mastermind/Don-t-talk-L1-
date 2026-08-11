import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import Card from './component/Card'
import Footer from './component/Footer'
import Header from './component/Header'
import arr from './utils/dummy'
import {greet, meet} from './utils/dummy'


function App(){

    let [A, setA]=useState(arr);

    function sortArr(){
        A.sort((a,b)=>a.price-b.price);
        setA([...A]);  //react faltu me maupilation nahi krne dega dom pr, iska reference change hone pr hi setA fn ko call krega
        // console.log(arr)
    }

    function price500(){
        const B= arr.filter((value)=> value.price>499);
        setA(B);
    }

    return(
        <>
        
        <Header/>
        
        <div className='middle' style={{display:'flex', flexWrap:'wrap', gap:'60px'}}>
            <button onClick={sortArr}>Sort by Price</button>
            <button onClick={price500}>Price above 499</button>
            {
                A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
            }

        </div>
        
        <Footer/>
        </>        
    )
}


const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)