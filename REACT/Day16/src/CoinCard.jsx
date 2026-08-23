

const CoinCard=({coin})=>{

    return(
        <div>
            <img src={coin.image} alt={coin.name} />
            <h2>{coin.name}</h2>
            <p>Price: $ {coin.current_price}</p>
            <p>Market Cap Rank: {coin.market_cap_rank}</p>
        </div>
    )

}

export default CoinCard;