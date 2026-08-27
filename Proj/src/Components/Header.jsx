

export default function Header(){

    return(
        <>
        <header className="bg-[#ff5200] relative ">
            <div className="flex justify-between max-w-[80%] container mx-auto py-8">
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
                <nav className="text-white font-bold text-base flex gap-10 items-center">
                    <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/food/login" target='_blank'>Partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-xl " href="">Get the App</a>
                    <a className=" bg-black rounded-xl p-3 px-10 " href="">Sign in</a>
                </nav>
            </div>
            <div className="pt-16 pb-8 relative">
                <img className="w-62 h-112 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                <img className="w-62 h-112 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                
                <div className="max-w-[60%] text-white font-bold text-[46px] container mx-auto text-center">Order food & groceries. Discover best restaurants. Swiggy it!</div>
                
                <div className=" max-w-[80%] container mx-auto text-center mt-1 gap-2 ">
                    <input className="bg-white p-4 rounded-2xl px-8 m-4" type="text" placeholder="Enter your delivery location" />
                    <input className='bg-white p-4 rounded-2xl w-lg' type="text" placeholder="Search for restaurant, items and more"/>
                </div>
                
                <div className="max-w-[80%] container mx-auto flex m-3">
                    <a href="https://www.swiggy.com/restaurants">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
                    </a>
                    <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
                    </a>
                    <a href="https://www.swiggy.com/dineout">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
                    </a>
                </div>
            </div>
            <div>

            </div>
        </header>
        </>
    )
}