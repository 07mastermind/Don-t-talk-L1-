import React from 'react'
import ReactDOM from 'react-dom/client'

// Header 
// body
// footer

function Card(props){
    return(
        <div style={{padding:'2px', border:'1px solid black', backgroundColor:'greenyellow'}}>
            <img src='https://images.meesho.com/images/products/559438241/6g5fy_512.webp?width=512' height='200px' width='150px' />
            <div style={{textAlign:'center', height:'auto', width:'150px'}}>
                <h2 style={{margin:'0'}}>{props.cloth}</h2>
                <h1 style={{margin:'0'}}>{props.offer}</h1>
                <h2 style={{margin:'0'}}>Shop Now</h2>
            </div>
        </div> 
    )
}

const arr=[{cloth:'T-Shirt',offer:'30-50%'}, {cloth:'Hoddis',offer:'20-50%'}, {cloth:'Kurta',offer:'50-80%'}, {cloth:'Jeans',offer:'30-50%'}, {cloth:'T-Shirt',offer:'20-40%'}, {cloth:'Skirt',offer:'20-50%'}, {cloth:'Pants',offer:'30-50%'}, {cloth:'Shirt',offer:'30-50%'}, {cloth:'Shirt',offer:'30-50%'}, {cloth:'Shirt',offer:'30-50%'}, {cloth:'Shirt',offer:'30-50%'}]
function App(){
    return(
        // header
        // body
        <div style={{display:'flex', flexWrap:'wrap', gap:'60px', padding:'10px'}}>
           {/* <Card cloth='Shirt' offer='30-50%'/>
           <Card cloth='Hoddis' offer='20-50%'/>
           <Card cloth='Kurta' offer='50-80%'/>
           <Card cloth='Jeans' offer='30-50%'/>
           <Card cloth='T-Shirt' offer='20-40%'/>
           <Card cloth='Shirt' offer='30-50%'/>
           <Card cloth='Shirt' offer='30-50%'/>
           <Card cloth='Shirt' offer='30-50%'/>
           <Card cloth='Shirt' offer='30-50%'/>
           <Card cloth='Shirt' offer='30-50%'/>
           <Card cloth='Shirt' offer='30-50%'/>
           <Card cloth='Shirt' offer='30-50%'/> */} 

            {
                arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/>)
            }

        </div>

        // footer
        
    )
}


const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)