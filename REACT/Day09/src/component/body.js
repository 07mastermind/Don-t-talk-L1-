import { useEffect, useState } from "react";

function Body(){
    let [Profile, setProfile]=useState([]);
    const [numberofprofile, setNumberofprofile]=useState('');

    async function generateprofile(count){
        try{
            const start=Math.floor(1+Math.random()*5000)
            const response=await fetch(`https://api.github.com/users?since=${start}&per_page=${count}`)
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data= await response.json()
            setProfile(data)
        }catch(error){
            console.error("Error fetching profiles:", error);
        }
    }   
        // Profile=data;
        // console.log(Profile)

       
        // generateprofile() X, async will doesn't block instantly.

    useEffect(()=>{
        generateprofile(10)
    },[])

    return(
        <div>
        <input type="text" className="inp" placeholder="Search here" value={numberofprofile} onChange={(e)=>setNumberofprofile(e.target.value)} ></input>
        <button className="but" onClick={()=>generateprofile(Number(numberofprofile))}>Search Profiles</button> 
        <div className="profile">

            {
                Profile.map((value)=>{
                    return(<div key={value.id} className="card">
                        <img src={value.avatar_url}/>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profile</a>
                    </div>)

                })
            }

        </div>
        </div>

    )
}

export default Body;