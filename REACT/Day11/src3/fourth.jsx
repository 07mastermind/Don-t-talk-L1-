import { useContext } from "react";
import GlobalContext from "./global";

export default function Fourth(){

    const {count} =useContext(GlobalContext)
    return(
        <h4>Hello {count}</h4>
    )
}