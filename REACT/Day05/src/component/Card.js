

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

export default Card;