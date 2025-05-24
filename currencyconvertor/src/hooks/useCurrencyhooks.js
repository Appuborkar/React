import { useEffect } from "react";
function useCurrencyInfo(currency){
    useEffect(()=>{
        const [data,setData]=useState({})
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        

    },[currency])
    console.log(data)
    return data
}
export default useCurrencyInfo;