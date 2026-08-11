export default function Header(){
    return(
        <div className='header'>
            <img id='img' src='https://img-cdn.publive.online/filters:format(webp)/afaqs/media/post_attachments/b846276869df8372f476a9c0c9a4599aa272fe5ec8d7d2880f64ff301fe5d425.png'/>
            <div className='options'>
                <button id='but'>MEN</button>
                <button id='but'>WOMEN</button>
                <button id='but'>KIDS</button>
                <button id='but'>HOME & LIVING</button>
                <button id='but'>BEAUTY</button>
                <button id='but'>STUDIO</button>
            </div>
            <input className='input' placeholder='Search for products, brands and more...'></input>
            <div className='profile'>
                <button id='but'>Profile</button>
                <button id='but'>Wishlist</button>
                <button id='but'>Bag</button>
            </div>
        </div>
    )
}